// Saves options to chrome.storage
function save_options() {
  var ip_address = document.getElementById('ip_address').value;
  var port = document.getElementById('port').value;
  var obj = {}
  obj['ipAddress'] = ip_address;
  obj['port'] = port;
  chrome.storage.sync.set(obj, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    ipAddress: '',
    port: ''
  }, function(items) {    
    document.getElementById('ip_address').value = items.ipAddress;
    document.getElementById('port').value = items.port;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);