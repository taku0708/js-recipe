const memoInput = document.querySelector("#memo-input")
const addButton = document.querySelector("#add-button")
const memoContainer = document.querySelector("#memo-container")

// console.dir(memoInput)

addButton.addEventListener("click", () => {
  const div = document.createElement("div")
  const deleteButton = document.create
  memoContainer.append(div)
  div.textContent = memoInput.value
})

const array = ["a", "i"]
console.log(array[1])

// addButton.addEventListener("click", () => {
//   memoInput.value = ""
// })
