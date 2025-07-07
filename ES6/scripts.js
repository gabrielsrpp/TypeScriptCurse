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

// user.sayUserName()
// user.sayUserName()

// 3 filter
const arr = [1,2,3,4,5]
console.log (arr)

const highNumbers = arr.filter((n) => {
    if( n >= 3) {
        return n
    }
})

console.log(highNumbers)

const users = [
    { name: 'Teste1', avaiable: true},
    { name: 'Teste2', avaiable: false},
    { name: 'Teste3', avaiable: false},
    { name: 'Teste4', avaiable: true},
]

const avaiableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available)

console.log(avaiableUsers)
console.log(notAvailableUsers)

// 4 map
const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Air Frier', price: 390.90, category: 'Eletro'},
    {name: 'Som', price: 200.00, category: 'Eletro'},
    {name: 'Calça Jeans', price: 10.99, category: 'Roupas'},
]

products.map((product) => {
    product.onSale = true
})

console.log(products)

// 5 templates literals
const Username = 'Teste777'
const age = 30

console.log(`O nome de usuario é ${Username} e ele tem ${age} anos.`)