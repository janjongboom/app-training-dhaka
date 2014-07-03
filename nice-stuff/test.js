var list =
  document.querySelector('#scrolling-list ul');

var db = {
  'Firefox OS': {
    stars: 5
  },
  'Android': {
    stars: 4
  },
  'iOS': {
    stars: 3
  },
  'Maemo': {
    stars: 2
  },
  'Windows Phone': {
    stars: -1
  }
};

Object.keys(db).forEach(function(os) {
  var li = document.createElement('li');
  var a = document.createElement('a');
  var p = document.createElement('p');

  a.onclick = function() {
    switchToDetail(os, db[os]);
  };

  p.textContent = os;

  a.appendChild(p);
  li.appendChild(a);
  list.appendChild(li);
});

function switchToDetail(os, detail) {
  document.body.classList.remove('list');
  document.body.classList.add('detail');

  document.querySelector('#detail h1')
    .textContent = os;
  document.querySelector('#detail .stars')
    .textContent = detail.stars;
}

document.querySelector('#go-back')
  .onclick = function() {
    document.body.classList.remove('detail');
    document.body.classList.add('list');
  }