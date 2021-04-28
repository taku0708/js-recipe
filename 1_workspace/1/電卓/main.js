let myTotal = 0
let myInput = ""
let myCalc = "+"
let myFlg = 1

const myValue = (myData) => {
  myFlg = 0
  myInput += myData
  document.myForm.myLine.value = myInput
}

const myCalculate = (myData) => {
  if (myFlg == 0) {
    myFlg = 1
    let myWork = myTotal + myCalc + myInput
    myTotal = eval(myWork)
    myInput = ""
    document.myForm.myLine.value = myTotal
  }
  if (myData == "=") {
    myTotal = 0
    myCalc = "+"
  } else {
    myCalc = myData
  }
}

const myC = () => {
  myTotal = 0
  myCalc = "+"
  myInput = ""
  document.myForm.myLine.value = myTotal
}

// 電卓 記号を押したときの計算式がみそ
// mycalcとmydataがみそ
