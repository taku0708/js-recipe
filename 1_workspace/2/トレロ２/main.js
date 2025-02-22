const inputElement = document.querySelector("#input-todo")
const inputElement2 = document.querySelector("#input-todo2")
const container = document.querySelector("#cards-container")
const container2 = document.querySelector("#cards-container2")
const addButton = document.querySelector("#add-button")
const addButton2 = document.querySelector("#add-button2")

addButton.onclick = function() {
  const card = createCard(inputElement.value)
  container.append(card)

  inputElement.value = ""
}
addButton2.onclick = function() {
  const card = createCard(inputElement2.value)
  container2.append(card)

  inputElement2.value = ""
}

// 発展１エンターキー

// inputElement.addEventListener("keypress", enterEvent)

// // const enterEvent = function(e) {
// //   if (e.keyCode === 13) {
// //     const card = createCard(inputElement.value)
// //     container.append(card)

// //     inputElement.value = ""
// //   }
// // }

inputElement.onkeydown = function(e) {
  if (e.keyCode === 13) {
    const card = createCard(inputElement.value)
    container.append(card)

    inputElement.value = ""
  }
}
inputElement2.onkeydown = function(e) {
  if (e.keyCode === 13) {
    const card = createCard(inputElement2.value)
    container2.append(card)

    inputElement2.value = ""
  }
}

// エンターキー終わり

const createCard = function(text) {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function() {
    card.remove()
  }

  card.append(deleteButton)

  return card
}
