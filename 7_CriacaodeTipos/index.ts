// 1 - generics

function showData<T>(arg: T):string {
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("testando generic"))
console.log(showData(true))
console.log(["teste"])

// 2 - Constraint em Generics

function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é: ${obj.name}`
}

const myObj = {name: "Porta", cor: "Branca"}
const otherProduct = {name: "Carro", wheels: 4, engine: 1.0}
const thirdObj = {price: 19.99, category: "Roupa"}

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))
// console.log(showProductName(thirdObj)) // precisaria da propiedade name