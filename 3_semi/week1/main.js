const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const display = document.querySelector("#display")

button1.onclick = function() {
  display.textContent = "正解!!!!"
}
button2.onclick = function() {
  display.textContent = "ざんねん!!!!"
}
button3.onclick = function() {
  display.textContent = "残念!!!!"
}
