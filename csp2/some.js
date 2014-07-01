document.querySelector('button')
  .onclick = function() {
    document.body.classList.toggle('list');
    document.body.classList.toggle('detail');
  }