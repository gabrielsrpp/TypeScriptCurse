// 1 - void

function whithoutReturn():void {
    console.log("esta função não tem retorno!")
    // return 1
}

whithoutReturn()

// 2 - callback como argumento
function greeting(name: string) {
    return `Ola ${name}`
}

function preGreeting(f: (name:string) => string, UserName:string) {

    console.log("funfando")

    const greet = f(UserName)
    console.log(greet); // Adicione esta linha para exibir a saudação

}

preGreeting(greeting, "teste")
preGreeting(greeting, "TESTE2")

// 3 - generic functions

function lastElement<T>(ar: T[]): T {
    return ar[ar.length - 1]
}

console.log(lastElement([1,2,3]))
console.log(lastElement(["a", "b", "c"]))
// console.log(lastElement("Teste")) ele esta esperando uma lista

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "Teste"}, {age: 30, job: "TESTE212"})

console.log(newObject)

// 4 - constraints

function biggestNumber<T extends number | string>(a: T, b: T): T {
    let biggest:T

    if(+a > +b) {
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(5,3))
console.log(biggestNumber("12", "5"))
// console.log(biggestNumber("12", 5)) os dois tipos tenque ser igual

// 5 - especificar tipo de argumento

function mergeArrays<T>(ar1: T[], ar2: T[]) {
    return ar1.concat(ar2)
}

console.log(mergeArrays([1,2,3], [5,6]))
console.log(mergeArrays<number | string>([1,2,3], ["teste", "TESTE222"]))

// 6 - parametros opcionais

function modernGreeting(name: string, greet?: string) {
    if (greet) {
        return `Ola ${greet} ${name}, tudo bem`;
    }
    return `Ola ${name}, tudo bem`;
}

console.log(modernGreeting("Tio")); // Saída: "Ola Tio, tudo bem"
console.log(modernGreeting("Paulo", "Dr.")); // Saída: "Ola Dr. Paulo, tudo bem"

// 7 - parametro default

function someDefault(n: number, m = 10): number {
    return n + m
}

console.log(someDefault(10))
console.log(someDefault(15,12))

// 8 - unknow

function doSomething(x: unknown) {
    if(Array.isArray(x)) {
        console.log(x[0])
    } else if(typeof x === "number") {
        console.log("x é um numero")
    }
}

doSomething([1,2,3])
doSomething(5)

// 9 - Tipo never

// function showErrorMessage(msg: string) : never {          /// tive que mencionar esta função para continuar exibindo os outros codigos no log ///
//     throw new Error(msg)
// }

// showErrorMessage("fowejfiwe")

// // 10 - rest operator

function somTds(...num: number[]) {
    return num.reduce((acc, curr) => acc + curr);
}

console.log(somTds(1, 2, 3, 4, 5)); // 15
console.log(somTds(123, 456, 78910)); // 79489
// console.log(somTds(["teste"])) tenque ser number

// 11 - destructuring como parametro

function showProductDetails({name, price}  : {name: string, price: number}) : string {
    return `o nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {name: "camisa",  price: 49.99}

console.log(showProductDetails(shirt))
// console.log(showProductDetails({name: "teste", age: 30}))
// console.log(showProductDetails([1,2]))

