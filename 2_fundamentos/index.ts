// 1- numbers

let x: number = 10

console.log(x)

const y:number = 15.584848
x = 16

console.log(typeof x)

console.log(typeof y)

console.log(y.toPrecision(3))

console.log(y)
 
// 2- string

const firstName:string = "João"

console.log(firstName.toUpperCase())

let fullName: string

const lastName: string = "Battisti"

fullName = firstName + " " + lastName

console.log(fullName)

console.log(typeof fullName)

console.log(typeof fullName)

// 3 - boolean
let a: boolean = false

console.log(a)
console.log(typeof a)

a = true
console.log(a)

// 4 - inference e annotation

const ann: string = "Teste"

let inf = "Teste"

// ann = 1
// inf = 1

// 5 desafio

const n1: number = 10

const numberToString = n1.toString()

const printMyNumber: string = `Eu vou imprimir o número ${numberToString}`

console.log(printMyNumber)


