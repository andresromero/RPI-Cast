#!/usr/bin/env python2.7
import subprocess
import sys
import tornado.httpserver
import tornado.websocket
import tornado.ioloop
import tornado.web
 
 
class WSHandler(tornado.websocket.WebSocketHandler):    
    def open(self):
        # print 'new connection'
        self.write_message("Connected")
      
    def on_message(self, message):
        print message
        if message=="STATUS":
            cmd = subprocess.Popen(["dbuscontrol.sh", "status"], stdout=subprocess.PIPE)
            status = {}
            for line in cmd.stdout:
                line = line.rstrip("\n")                
                line = line.split(':')
                key,val = line[0],line[1].strip()
                status[key] = val
            if len(status.keys())<1:
                self.write_message('Not playing')
            else:
                self.write_message(status)
        elif message=="TOOGLE_PAUSE":
            cmd = subprocess.Popen(["dbuscontrol.sh", "pause"], stdout=subprocess.PIPE)
        elif message=="STOP_VIDEO":
            cmd = subprocess.Popen(["dbuscontrol.sh", "stop"], stdout=subprocess.PIPE)
        elif message=="VOLUME_UP":
            cmd = subprocess.Popen(["dbuscontrol.sh", "volumeup"], stdout=subprocess.PIPE)
        elif message=="VOLUME_DOWN":
            cmd = subprocess.Popen(["dbuscontrol.sh", "volumedown"], stdout=subprocess.PIPE)
        elif message[0:4]=="TIME":
            message = message.split(":")
            cmd = subprocess.Popen(["dbuscontrol.sh", "setposition",message[1]], stdout=subprocess.PIPE)
        else:
            subprocess.Popen(['omxplayer', message])
            self.write_message(message[0:4])

    def on_close(self):
        print 'connection closed'

    def check_origin(self, origin):
        return True
 
 
application = tornado.web.Application([
    (r'/ws', WSHandler),
])
 
 
if __name__ == "__main__":
    http_server = tornado.httpserver.HTTPServer(application)
    http_server.listen(8888)
    tornado.ioloop.IOLoop.instance().start()