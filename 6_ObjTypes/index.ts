// 1 - tipo de objeto para função com interface

interface Product {
    name: string
    price: number
    isAvaiable: boolean
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} seu preço é R$ ${product.price}`)
    if(product.isAvaiable) {
        console.log("O produto esta disponivel")
    }
}

const shirt:Product = {
    name: "Camisa",
    price: 19.99,
    isAvaiable: true
}

showProductDetails(shirt)
showProductDetails({name: "Tenis", price: 129.99, isAvaiable: false})

// 2 - propiedades opcional em interface
interface User {
    email: string,
    role?: String
}

function showUserDetails(user: User) {
    console.log(`O usuario tem o e-mail: ${user.email}`)

    if(user.role) {
        console.log(`A função do usuario é: ${user.role}`)
    }
}


const u1:User = {email: "gabriel@email.com", role: "Admin"}
const u2:User = {email: "joao@email.com"}

showUserDetails(u1)
showUserDetails(u2)

// 3 - readonly
interface Car{
    brand: string
    readonly wheels: number
}

const fusca:Car = {
    brand: "VW",
    wheels: 4
}

console.log(fusca)
// fusca.wheels = 5 // melhor usar o readonly


// 4 - Index Signature

interface CoordObject {
    [index: string]: number // seguir este padrão que foi definido
}

let coords: CoordObject = {
    x:10
}

coords.y = 15

console.log(coords)

// coords.z = "teste" // não segue o padrão

// 5 - Extending Types

interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const humano: Human = {
    name: "Teste",
    age: 30
}

console.log(humano)

const superHumano: SuperHuman = {
    name: "Teste",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"]
}

console.log(superHumano)
console.log(superHumano.superpowers[1])

// 6 - intersection types

interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name:"Arnold",
    type:"Shotgun",
    caliber: 12
}

console.log(arnold)

console.log(arnold.caliber)

// 7 - Readonly array

let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Banana"]

// myArray[3] = "Mamão"

console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
    return `Frutas: ${item}`
})

console.log(myArray)

// myArray[0] = "teste" // modificações diretas não são permitidas