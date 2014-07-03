document.querySelector('button')
  .onclick = function() {
    var req = navigator.mozContacts.getAll();

    req.onsuccess = function(e) {
      if (req.result) {
        document.querySelector('p#all-contacts')
          .textContent += req.result.familyName + ', ';

        req.continue();
      }
    };
  }