function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  var childrenOfRankedLists = document.querySelectorAll(".ranked-list li");
  for (var i = 0; i < childrenOfRankedLists.length; i++) {
    childrenOfRankedLists[i].innerHTML = parseInt(childrenOfRankedLists[i].innerHTML) + n
  }
}

function deepestChild() {
  let current = document.querySelector('div#grand-node');
  let next = current.children[0]

  while (next) {
    current = next
    next = current.children[0]
  }
  return current
}

