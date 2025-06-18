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