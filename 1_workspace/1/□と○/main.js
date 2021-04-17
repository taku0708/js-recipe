const figure = document.querySelector("#figure")
// const circleButton = document.querySelector("#circle-button")
// const squareButton = document.querySelector("#square-button")

// circleButton.onclick = function() {
//   figure.classList.add("rounded")
// }

// squareButton.onclick = function() {
//   figure.classList.remove("rounded")
// }
let t = 0

figure.onclick = function() {
  if (t === 0) {
    figure.classList.add("rounded")
    t = 1
  } else if (t === 1) {
    figure.classList.add("triangle")
    figure.classList.remove("rounded")
    t = 2
  } else {
    figure.classList.add("square")
    figure.classList.remove("triangle")
    t = 0
  }
}

//色々なイベント

// figure.onmouseover = function() {
//   figure.classList.toggle("rounded")
// }

//三角形導入

// figure.onclick = function() {}
