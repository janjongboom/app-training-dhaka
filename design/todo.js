function renderItem(item) {
  var li = document.createElement('li');
  li.textContent = item;
  document.querySelector('ul')
    .appendChild(li);
}

window.addEventListener('DOMContentLoaded', function() {
  var list =
    JSON.parse(
      localStorage.getItem('list') || '[]');

  list.forEach(renderItem);

  document.querySelector('button')
    .onclick = function() {
      var v = document.querySelector('textarea')
        .value;

      list.push(v);

      localStorage.setItem('list',
        JSON.stringify(list));

      renderItem(v);
    };

  // <script>alert(1)</script>
  // <font color="white"></font>

  document.querySelector('ul').addEventListener(
    'tap', function(e) {
      document.body.classList.remove('list')
      document.body.classList.add('detail')

      document.querySelector('#detail h1')
        .textContent = e.target.textContent;
  });

  var gd = new GestureDetector(document.querySelector('ul'))
  gd.startDetecting();

  document.querySelector('ul').addEventListener('swipe', function() {
    alert('SWIPE!!!!!');
  })

})