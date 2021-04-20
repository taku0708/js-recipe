// 自分で作る問題

const quizText = document.querySelector("#quiz-text")
const quizImage = document.querySelector("#quiz-image")
const choice1 = document.querySelector("#choice-1")
const choice2 = document.querySelector("#choice-2")
const choice3 = document.querySelector("#choice-3")
const feedback = document.querySelector("#feedback")

const quiz = {
  text: "ムズムズ問題",
  image: "Two.jpeg",
  content: [
    {
      button: "namaste",
      feedback: "attya",
    },
    {
      button: "konnitiha",
      feedback: "nahin",
    },
    {
      button: "sayounara",
      feedback: "nahin",
    },
  ],
}

const reloadQuiz = () => {
  quizText.textContent = "Q" + quiz.text
  quizImage.src = "./images/" + quiz.image
  choice1.textContent = quiz.content[0].button
  choice2.textContent = quiz.content[1].button
  choice3.textContent = quiz.content[2].button
}

reloadQuiz()

const choose = (choiceNumber) => {
  feedback.textContent = quiz.content[choiceNumber].feedback
}

choice1.onclick = () => choose(0)
choice2.onclick = () => choose(1)
choice3.onclick = () => choose(2)
