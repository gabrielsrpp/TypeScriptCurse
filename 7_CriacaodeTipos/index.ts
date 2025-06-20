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

// 3 - generics com interface
interface MyObject<T,U,Q> {
    name: string
    wheels: T
    engine: U
    color: Q
}

type Car = MyObject<number,number,string>
type Pen = MyObject<boolean, boolean,string>

const myCar:Car = {name: "Fusca", wheels: 4, engine: 1.0, color: "Branco"}
const myPen: Pen = {name: "Caneta BIC   ", wheels:false, engine:false,color:"Azul"}

console.log(myCar)
console.log(myPen)

// 4 - type parameters

function getSomeKey<T, K extends keyof T>(obj: T, key:K) {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]} `
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))
// console.log(getSomeKey(server, 'teste')) // tenque estar presente no objeto

// 5 - keyof type operator

type Character = {name: string, age: number, hasDriveLicense: boolean}

type C = keyof Character

function showCharName(obj: Character, name: C): string {
    return `${obj[name]}`
}

const myChar:Character = {
    name: "Paulo",
    age: 30,
    hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'))

// 6 - typeof type operator

const userName: string = "Mathues"

const userName2: typeof userName = "João"

// const userName3: typeof userName = 14

type x = typeof userName

const userName4: x = "Joaquim"

// 7 - indexed acess type
type Truck = {km: number, kg: number, description: string}

type Km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminha para pouca carga"
}

function showKm(km: Km) {
    console.log(`O veiculo tem a km de: ${km}`)
}

showKm(newTruck.km)

const newCar = {
    km: 5000,
    kg: 1000
}

showKm(newCar.km)