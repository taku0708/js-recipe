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
