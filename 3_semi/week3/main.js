const display = document.getElementById("display")
const teaButton = document.getElementById("tea-button")
const cokeButton = document.getElementById("coke-button")
const beerButton = document.getElementById("beer-button")
const addButton = document.getElementById("add-my-money")
const useButton = document.getElementById("add-amount-money")
const amountMoneyDisplay = document.getElementById("amount-money")
const reverseButton = document.getElementById("reverse-button")

const displayMyMoney = document.querySelector("#my-money")
let myMoney = 0
let amountMoney = 0

console.log(amountMoney)
addButton.onclick = function() {
  myMoney += 1000
  displayMyMoney.textContent = myMoney
  console.log(myMoney)
}

const createImage = (drink) => {
  let drinkImgSrc = ""
  if (drink === "tea") {
    drinkImgSrc =
      "https://www.itoen.jp/files/products/japanese_tea/210315%20ikiikiPKG.jpg"
  } else if (drink === "coke") {
    drinkImgSrc =
      "https://www.cocacola.jp/images/product/cola_bottle_img_2020.png"
  } else {
    drinkImgSrc =
      "https://image.itmedia.co.jp/news/articles/2104/22/l_ts0153_zenkai01.jpg"
  }
  console.log(myMoney)

  // const createImage = (drink) => {
  //   let drinkImgSrc = ""
  //   switch (drink) {
  //     case "tea":
  //       drinkImgSrc =
  //         "https://www.itoen.jp/files/products/japanese_tea/210315%20ikiikiPKG.jpg"
  //       break
  //     case "coke":
  //       drinkImgSrc =
  //         "https://www.cocacola.jp/images/product/cola_bottle_img_2020.png"
  //       break
  //     default:
  //       drinkImgSrc =
  //         "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
  //   }
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
  console.log(amountMoney)
}
const disabled = (amountMoney) => {
  if (amountMoney >= 150) {
    teaButton.disabled = false
    cokeButton.disabled = false
    beerButton.disabled = false
  } else if (130 <= amountMoney && amountMoney < 150) {
    teaButton.disabled = false
    cokeButton.disabled = false
    beerButton.disabled = true
  } else if (100 <= amountMoney && amountMoney < 130) {
    teaButton.disabled = false
    cokeButton.disabled = true
    beerButton.disabled = true
  } else if (amountMoney < 100) {
    teaButton.disabled = true
    cokeButton.disabled = true
    beerButton.disabled = true
  }
  console.log(amountMoney)
}
disabled(amountMoney)

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
beerButton.addEventListener("click", () => {
  if (amountMoney >= 150) {
    amountMoney -= 150
    const image = createImage("beer")
    display.append(image)
    amountMoneyDisplay.textContent = amountMoney
  }
})

reverseButton.onclick = () => {
  myMoney += amountMoney
  amountMoney = 0
  displayMyMoney.textContent = myMoney
  amountMoneyDisplay.textContent = amountMoney
}

// ソースコードの読みさすさと
// 実行速度から、
// ・二分岐の場合は、『if文』が適している
// ・多分岐の場合は、『switch文』が適している
