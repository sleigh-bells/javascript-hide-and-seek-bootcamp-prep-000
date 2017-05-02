function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested div.target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('#app ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  const lis = document.querySelector('#grand-node').querySelectorAll('div');
  var current = document.querySelector('#grand-node');
  for (let i = 0; i < lis.length; i++) {
    current = current.querySelector('div');
  }
  return current;
}
