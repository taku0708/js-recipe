const display = document.querySelector("#display")
const plusButton = document.querySelector("#plus-button")

let count = 0
plusButton.onclick = function() {
  count += 1
  display.textContent = count
}

// x2ボタン、-1ボタン

const multiplyButton = document.querySelector("#multiply-button")
const minusButton = document.querySelector("#minus-button")

multiplyButton.onclick = function() {
  count = count * 2
  display.textContent = count
}

minusButton.onclick = function() {
  count -= 1
  display.textContent = count
}

// 電卓

const counter1 = document.querySelector("#counter1")
const counterResult = document.querySelector("#counter-container")

counter1.onclick = function() {
  counterResult.textContent = 1
}
