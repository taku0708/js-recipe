const display = document.querySelector("#display")
const button = document.querySelector("#button")

// let count = 0

// const countUp = function() {
//   count += 1
//   display.textContent = count / 100
// }

// button.onclick = function() {
//   setInterval(countUp, 10)
//   button.textContent = "stop"
// }

let count = 0

const countUp = function() {
  count += 1
  display.textContent = count / 100
}

let id = null

button.onclick = function() {
  if (id === null) {
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}

// const niceButton = document.querySelector("#nice-button")

// niceButton.onclick = funciton() {
//     console.log('こんにちは');
// }
