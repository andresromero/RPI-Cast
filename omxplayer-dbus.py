#!/usr/bin/env python2.7

import dbus, time
from subprocess import Popen

# media file to open
file="baket.mp4"

# open omxplayer
cmd = "omxplayer --win '0 0 100 100' %s" %(file)
Popen([cmd], shell=True)

# wait for omxplayer to initialise
done,retry=0,0
while done==0:
    try:

        with open('/tmp/omxplayerdbus', 'r+') as f:
            omxplayerdbus = f.read().strip()
        bus = dbus.bus.BusConnection(omxplayerdbus)
        object = bus.get_object('org.mpris.MediaPlayer2.omxplayer','/org/mpris/MediaPlayer2', introspect=False)
        dbusIfaceProp = dbus.Interface(object,'org.freedesktop.DBus.Properties')
        dbusIfaceKey = dbus.Interface(object,'org.mpris.MediaPlayer2.Player')
        done=1
    except:
        retry+=1
        time.sleep(1)
        if retry >= 50:
            print "ERROR"
            raise SystemExit

# property: print duration of file
print dbusIfaceProp.Duration()

# key: pause after 5 seconds
time.sleep(5)
dbusIfaceKey.Action(dbus.Int32("16"))

# key: un-pause after 5 seconds
time.sleep(5)
dbusIfaceKey.Action(dbus.Int32("16"))

# key: quit after 5 seconds
time.sleep(5)
dbusIfaceKey.Action(dbus.Int32("15"))