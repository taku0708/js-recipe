const inputElement = document.querySelector("#input-todo")
const container = document.querySelector("#cards-container")
const addButton = document.querySelector("#add-button")

addButton.onclick = function() {
  const card = createCard(inputElement.value)
  container.append(card)

  inputElement.value = ""
}

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

// addButton.onclick = function() {
//   const text = inputElement.value
//   const card = document.createElement("div")
//   card.className = "card"

//   const todo = document.createElement("div")
//   todo.className = "todo"
//   todo.textContent = text
//   card.append(todo)

//   container.append(card)

//   const deleteButton = document.createElement("div")
//   deleteButton.className = "delete"

//   deleteButton.onclick = function() {
//     card.remove()
//   }

//   card.append(deleteButton)
//   container.append(card)

//   inputElement.value = ""
// }
