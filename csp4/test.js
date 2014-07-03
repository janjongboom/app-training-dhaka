document.querySelector('button').onclick =
  function() {
    var a = new MozActivity({
      name: 'new',
      data: {
        type: 'websms/sms',
        number: '+3162471',
        body: 'Hi there!'
      }
    });

    a.onsuccess = function(e) {
      console.log('success')
    };

    a.onerror = function() {
      console.error('error');
    }
  }


navigator.mozSetMessageHandler('activity',
  function(e) {
    document.querySelector('#img')
      .src = URL.createObjectURL(e.source.data.blobs[0])
  });
