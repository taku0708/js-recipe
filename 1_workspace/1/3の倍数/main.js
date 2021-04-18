// const number = 24

// if (number % 3 === 0) {
//   console.log(number + "!!!!!")
// } else {
//   console.log(number)
// }

// for (let n = 1; n <= number; n++) {
//   if (n % 3 === 0) {
//     console.log(n + "!!!!!!")
//   } else {
//     console.log(n)
//   }
// }

const genkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!`)
    } else {
      console.log(n)
    }
  }
}

genkiFunction(100)

// fizbazz

const FizzBuZZ = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 15 === 0) {
      console.log("FizzBuzz")
    } else if (n % 5 === 0) {
      console.log("Buzz")
    } else if (n % 3 === 0) {
      console.log("Fizz")
    } else {
      console.log(n)
    }
  }
}

FizzBuZZ(50)

// 世界のナベアツ

const nabeatsu = function(number) {
  for (let n = 1; n <= number; n++) {
    if (30 <= n && n <= 39) {
      console.log(`${n}!!!!!?????`)
    } else if (n % 3 === 0) {
      console.log(`${n}!!!!!?????`)
    } else {
      console.log(n)
    }
  }
}

nabeatsu(50)

// 元気な秒針

const button = document.querySelector("#button")

const clock = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}@@@@@@`)
    } else {
      console.log(n)
    }
  }
}

button.onclick = function() {
  setInterval(clock, 1000)
}

// const clockAction = function() {
//   setInterval(clock, 1000)
// }

// clockAction()
