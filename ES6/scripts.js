// 1 - var, let e const
var x = 10
var y = 15

if(y > 10) {
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10
let b = 15

if(b > 10) {
    let a = 5
    console.log(a)
}

console.log(a)

let i = 100

for(let i = 0; i < 5; i++) {
    console.log(i)
}

console.log(i)

function logName() {
    const name = 'teste'
    console.log(name)
}

const name = 'Paulo'

console.log(name)

// 2 - arrow function
const sum = function sum(a,b) {
    return a + b
}

const arrowSum =  (a,b) => a + b

console.log(sum(5,5))
console.log(arrowSum(5,5))

const greeting = (name) => {
    if(name) {
        return 'Ola' + + '1'
    } else {
        return 'Ola!'
    }
}

console.log(greeting('Paulo'))
console.log(greeting())

const testeArrow = () => console.log('testou!')

testeArrow()

const user = {
    name: "Teste",
    sayUserName() {
        setTimeout(function() {
            console.log(this)
            console.log("Username: " + this.name)
        }, 500)
    },
    sayUserName() {
        setTimeout(() => {
            console.log(this)
            console.log('Username: ' + this.name)
        }, 700)
    }
}

user.sayUserName()
user.sayUserName()