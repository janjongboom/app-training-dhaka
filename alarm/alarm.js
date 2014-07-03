var request = navigator.mozAlarms.add(new Date((+new Date()) + 30000), 'ignoreTimezone', {
  type: 'yolo'
});

console.log('setting to', new Date((+new Date()) + 30000) + '')

request.onsuccess = function() {
  console.log('success');
}

request.onerror = function() {
  console.error('err');
}

navigator.mozSetMessageHandler('alarm', function() {
  console.log('alarm');
  launchSelf();
});

function launchSelf() {
  var request = window.navigator.mozApps.getSelf();
  request.onsuccess = function() {
    if (request.result) {
      request.result.launch();
    }
  };
}