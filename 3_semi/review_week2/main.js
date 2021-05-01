const input = document.querySelector("#input")
const container = document.querySelector("#container")
const addButton = document.querySelector("#add-button")
console.log(addButton)

let memories = []

addButton.addEventListener("click", () => {
  memories.push(input.value)
  localStorage.memories = JSON.stringify(memories)
  createNew()
})

const createNew = () => {
  container.innerHTML = ""
  if (localStorage.memories) {
    memories = JSON.parse(localStorage.memories)

    for (let i = 0; i <= memories.length; i++) {
      const div = document.createElement("div")
      div.textContent = memories[i]
      container.append(div)
    }
  }
}

createNew()

// const toMorseCode = funciton() {
//     string.prototype.split("")
//     console.log
// }

// const str = "00001010101010"
// const split = str.prototype.split("")
// console.log(split[3])
// // const toMorseCode = () = {
//     if ()
// }

//
const toMorseCode = (strNum) => {
  let MorseCode = ""
  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] === "0") {
      MorseCode += "."
    } else {
      MorseCode += "-"
    }
  }
  return MorseCode
}

console.log(toMorseCode("01010101000"))

// const addAllNumbers = (numStr) => {
//   let split = numStr.split("-")
//   //   let plus = () => {
//   //     let splitAdd = ""
//   //     for (let i = 0; i < split.length; i++) {
//   //       splitAdd += split[i]
//   //     }
//   //   }
//   let splitAdd = ""
//   let splitTotal = eval(splitAdd)

//   for (let i = 0; i < split.length; i++) {
//     splitAdd += split[i]
//   }

//   return splitTotal
// }

// console.log(addAllNumbers("123-123-45"))

// const addAllNumbers = (numStr) => {
//   const cuts = numStr.split("-")
//   let result = 0
//   for (let i = 0; i < numStr.length; i++) {
//     result += Number(cuts[i])
//   }
//   return result
// }

const addAllNumbers = function(numString) {
  const split = numString.split("-")
  let result = 0
  for (let i = 0; i < split.length; i++) {
    result += Number(split[i])
  }
  return result
}

console.log(addAllNumbers("123-122-45"))
