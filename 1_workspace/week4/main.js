new Vue({
  el: "#app",
  data: {
    count: 0,
  },
  methods: {
    countUp: function() {
      this.count += 1
    },
  },
})

// new Vue({
//   el: "#v-if",
//   data: {
//     seen: false,
//   },
//   methods: {
//     hyouji: function() {
//       this.seen = true
//     },
//   },
// })

// new Vue({
//   el: "#v-if-sign-in",
//   data: {
//     user: null,
//   },
//   methods: {
//     signIn() {
//       this.user = {
//         name: "geektaro",
//       }
//     },
//     signOut() {
//       this.user = null
//     },
//   },
// })

new Vue({
  el: "#v-for",
  data: {
    animals: ["aaaaa", "iiiii", "uuuuu"],
  },
  methods: {
    addAnimals: function() {
      this.animals.push("eeeee")
    },
  },
})
