const display = document.getElementById("display")
const teaButton = document.getElementById("tea-button")
const cokeButton = document.getElementById("coke-button")
const addButton = document.getElementById("add-my-money")
const useButton = document.getElementById("add-amount-money")
const amountMoneyDisplay = document.getElementById("amount-money")
const reverseButton = document.getElementById("reverse-button")

const displayMyMoney = document.querySelector("#my-money")
let myMoney = 0
let amountMoney = 0

addButton.onclick = function() {
  myMoney += 1000
  displayMyMoney.textContent = myMoney
}

const createImage = (drink) => {
  let drinkImgSrc = ""
  switch (drink) {
    case "tea":
      drinkImgSrc =
        "https://www.itoen.jp/files/products/japanese_tea/210315%20ikiikiPKG.jpg"
      break
    case "coke":
      drinkImgSrc =
        "https://www.cocacola.jp/images/product/cola_bottle_img_2020.png"
      break
    default:
      drinkImgSrc =
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
  }
  const figure = document.createElement("figure")
  figure.classList.add("vending-machine__items-container__figure")
  const img = document.createElement("img")
  img.src = drinkImgSrc
  img.classList.add("vending-machine__items-container__figure__img")
  figure.append(img)
  return figure
}

useButton.onclick = () => {
  if (myMoney >= 100) {
    // 金額計算
    myMoney -= 100
    amountMoney += 100

    // 表示
    // 現在の所持金
    displayMyMoney.textContent = myMoney

    // 投入金額
    amountMoneyDisplay.textContent = amountMoney
  }
}

teaButton.onclick = () => {
  if (amountMoney >= 100) {
    amountMoney -= 100
    const image = createImage("tea")
    display.append(image)
    amountMoneyDisplay.textContent = amountMoney
  }
}

cokeButton.onclick = () => {
  if (amountMoney >= 130) {
    amountMoney -= 130
    const image = createImage("coke")
    display.append(image)
    amountMoneyDisplay.textContent = amountMoney
  }
}

reverseButton.onclick = () => {
  myMoney += amountMoney
  amountMoney = 0
  displayMyMoney.textContent = myMoney
  amountMoneyDisplay.textContent = amountMoney
}
