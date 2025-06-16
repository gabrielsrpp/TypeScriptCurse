//1 -  arrays 

let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

// numbers = "teste"

const nomes: string[] = ["João", "Paulo"]

// nomes.push (4)

// 2 - outra sintaxe array

const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)

// nums.push("teste")

console.log(nums[0])

// 3 any

const arr1: any = [1, "teste", true, [], {nome: "João"}]

console.log(arr1)

arr1.push([1, 2, 3])

console.log(arr1)

// 4 - parametros tipados

function soma(a: number, b:number) {
    console.log(a + b)
}

soma(4, 5)

// soma("a", "b")

// 5 - retorno de função

function greeting(name: string): string {

    return `Ola ${name}`
}

console.log(greeting("João"))

// 6 - função anonima

setTimeout(function(){

    const sallary: number = 1000

    // console.log(parseFloat(sallary))

    //  console.log(sallary)

}, 2000)

// 7 - tipos de objeto

function passCoordinates(coord: {x: number , y: number}) {
    console.log("X coordinates:" + coord.x)
    console.log("X coordinates:" + coord.y)

}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord)
// passCoordinates({nome: 1, sobrenome: 2})

const pessoaObj:{nome:string, surname:string} = {nome: "Paulo", surname:"Battista"}

// 8 - props opcionais
function showNumbers(a: number, b: number, c: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    if(c) {
        console.log("C: " + c)
    }

}

showNumbers(1, 2, 3)
showNumbers(4, 5)
// showNumbers(6)


// 9 - validando argumento opcioanl

function advancedGreeting(firstName: string, lastName?: string) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }

    return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting("Paulo", "Batista"))
console.log(advancedGreeting("Tio"))


// 10 - union type

function showBalance(balance: string | number) {
    console.log(`o saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance("500")
// showBalance(true)

const arr2: Array<number | string | boolean> = [1, "teste", true]

// 11 - avancada em union types

function showUserRole(role: boolean | string) {
    if(typeof role === "boolean") {
        return "Usuario não aprovado!"
    }

    return `A função do usuario é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

// 12 - types alias

type ID = string | number

function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("200")
showId(123)

// 13 - interface

interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj: Point= {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

// 14 - interface x type alias

interface Person {
    name:string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Mathues", age: 30}

console.log(somePerson)

type personTupe = {
    name: string
}

// type personType = {
       // age:number
//    }


// 15 - literal types
let test: "testando"
test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`)
}

showDirection("left")

// showDirection("top")


// 16 - non-null assertion operators

const p = document.getElementById("some-p")

console.log(p!.innerText)

// 17 -  bigint

let n: bigint

// n = 1

n = 1000n

console.log(n)

console.log(typeof n)

console.log(n + 100n)


// 18 - symbol

let symbolA: symbol = Symbol("a")
let symbolB: symbol = Symbol("a")

console.log(symbolA == symbolB)    // false
console.log(symbolA === symbolB)   // false
