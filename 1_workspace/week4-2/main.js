// new Vue({
//   el: "#v-bind",
//   data: {
//     helloClass: "hello",
//   },
// })

//

// new Vue({
//   el: "#v-model",
//   data: {
//     inputValue: "",
//   },
// })

new Vue({
  el: "#created",
  data: {
    inputValue: "",
    memo: "",
  },
  created: function() {
    const storedMemo = localStorage.memo
    if (storedMemo) {
      this.memo = storedMemo
    }
  },
  methods: {
    save: function() {
      localStorage.memo = this.inputValue
    },
  },
})
