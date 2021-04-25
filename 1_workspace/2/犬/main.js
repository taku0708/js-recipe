const imageElement = document.getElementById("dog-image")
// const imageElement2 = document.getElementById("cat-image")
const imageElement3 = document.getElementById("dog-image3")
// console.log(imageElement3)
const changeButton = document.querySelector("#change-button")

// 指定したサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json() // 結果を json として読み込む
  })
  .then((data) => {
    imageElement.src = data.message // 画像を表示する
  })

changeButton.addEventListener("click", function() {
  window.location.reload()
})

// fetch("https://api.thecatapi.com/v1/images/search")
//   .then((res) => {
//     return res.json() // 結果を json として読み込む
//   })
//   .then((data) => {
//     imageElement2.src = data.message // 画像を表示する
//   })

const select = document.getElementById("select")
const indexNum = () => select.selectedIndex
const str = () => select.options[indexNum()].value
// select.onchange = () => console.log(select.selectedIndex)

select.addEventListener("change", () =>
  fetch("https://dog.ceo/api/breed/" + str() + "/images/random")
    .then((res) => {
      return res.json() // 結果を json として読み込む
    })
    .then((data) => {
      imageElement3.src = data.message // 画像を表示する
    }),
)
