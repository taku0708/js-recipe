const display = document.querySelector("#display")
const plusButton = document.querySelector("#plus-button")

let count = 0
plusButton.onclick = function() {
  count += 1
  display.textContent = count
}

// x2ボタン、-1ボタン
const display2 = document.querySelector("#display2")
const display3 = document.querySelector("#display3")

const multiplyButton = document.querySelector("#multiply-button")
const minusButton = document.querySelector("#minus-button")

let count2 = 1
let count3 = 1023

multiplyButton.onclick = function() {
  count2 = count2 * 2
  display2.textContent = count2
}

minusButton.onclick = function() {
  count3 -= 1
  display3.textContent = count3
}

const taku = {
  name: "nagahara taku",
  age: 21,
  hobby: ["baseball", "soccer"],
  from: "kanagawa",
  sayHello: function() {
    console.log(`こんにちは${taku.name}と申します`)
  },
}
