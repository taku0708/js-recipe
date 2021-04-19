// const choice1 = document.querySelector("#choice-1")
// const choice2 = document.querySelector("#choice-2")
// const choice3 = document.querySelector("#choice-3")
// const feedback = document.querySelector("#feedback")

// choice1.onclick = function() {
//   feedback.textContent = "残念、、、ゴリアテはー"
// }
// choice2.onclick = function() {
//   feedback.textContent = "残念、、、ゼニガメはー"
// }
// choice3.onclick = function() {
//   feedback.textContent = "正解！！！！！"
// }

// const choose = function(choiceString) {
//   if (choiceString === "ゴリアテ") {
//     feedback.textContent = "残念"
//   } else if (choiceString === "ゼニガメ") {
//     feedback.textContent = "残念!!!"
//   } else if (choiceString === "ガニメデ") {
//     feedback.textContent = "正解"
//   }
// }

// choice1.onclick = function() {
//   choose("ゴリアテ")
// }
// choice2.onclick = function() {
//   choose("ゼニガメ")
// }
// choice3.onclick = function() {
//   choose("ガニメデ")
// }

// const choose = function(choiceString) {
//   if (choiceString === 0) {
//     feedback.textContent = "ザザ残念"
//   } else if (choiceString === 1) {
//     feedback.textContent = "ザザザザザザザザザ"
//   } else {
//     feedback.textContent = "正解"
//   }
// }

// choice1.onclick = function() {
//   choose(0)
// }
// choice2.onclick = function() {
//   choose(1)
// }
// choice3.onclick = function() {
//   choose(2)
// }

// const feedbacks = ["ざんん円", "ザザザザザあざあ", "正解いいいいいい"]

// const choose = function(choiceNumber) {
//   feedback.textContent = feedbacks[choiceNumber]
// }

// choice1.onclick = function() {
//   choose(0)
// }
// choice2.onclick = function() {
//   choose(1)
// }
// choice3.onclick = function() {
//   choose(2)
// }

const quizText = document.querySelector("#quiz-text")
const quizImage = document.querySelector("#quiz-image")
const choice1 = document.querySelector("#choice-1")
const choice2 = document.querySelector("#choice-2")
const choice3 = document.querySelector("#choice-3")
const feedback = document.querySelector("#feedback")

const quiz = {
  text: "この星の名前はなんでしょう",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "goriade",
      feedback: "zannen",
    },
    {
      text: "zenigame",
      feedback: "zannen",
    },
    {
      text: "ganimede",
      feedback: "seikai",
    },
  ],
}

const reloadQuiz = function() {
  quizText.textContent = "Q " + quiz.text

  quizImage.src = "./images/" + quiz.image

  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

const choose = function(choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function() {
  choose(0)
}
choice2.onclick = function() {
  choose(1)
}
choice3.onclick = function() {
  choose(2)
}

reloadQuiz()
