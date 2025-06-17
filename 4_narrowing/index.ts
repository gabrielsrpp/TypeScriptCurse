// 1 - type guard

function sum(a: number | string, b: number | string) {

    if(typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    } else {
        console.log("Impossivel realizar a soma!")
    }
}

sum("4", "59")
sum(12, 42.3)
sum("5", 6)

// 2 - checando se valor existe

function operations(arr: number[], operation?: string) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total, 0)
            console.log(sum)
        } else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total, 1)
            console.log(multiply)
        } else {
            console.log("Operação inválida.")
        }
    } else {
        console.log("Por favor, defina uma operação")
    }
}



operations([1, 2, 3])              // Esperado: "Por favor, defina uma operação"
operations([1, 2, 3], "sum")       // Esperado: 6 (1 + 2 + 3)
operations([1, 2, 3], "multiply")  // Esperado: 6 (1 * 2 * 3)


// 3 - instance of
class User {
    name

    constructor(name: string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const jhon = new User("Jhon")
const paul = new SuperUser("Paul")

console.log(jhon)
console.log(paul)

function userGreeting(user: object) {
    if(user instanceof SuperUser) {
        console.log(`Ola ${user.name}, deseja ver os dados do sistema?`)
    } else if (user instanceof User) {
        console.log(`Ola ${user.name}`)
    }
}

userGreeting(jhon)
userGreeting(paul)

// 4 - operador in

class Dog {
    name
    breed

    constructor(name: string, breed?: string) {
        this.name = name
        if(breed) {
            this.breed = breed
        }
    }
}

const turca = new Dog("Turca")
const bob = new Dog("Bob", "Pastor Alemão")

function showDogDetails(dog:Dog) {

    if('breed' in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`)
    }else {
        console.log("o cachorro é um SRD")
    }
}

showDogDetails(turca)
showDogDetails(bob)

// desafio 3 

function showReview(review: number | boolean) {
    if (typeof review === "number") {
        switch (review) {
            case 1:
                console.log("Nota 1: Muito ruim 😞");
                break;
            case 2:
                console.log("Nota 2: Ruim 😐");
                break;
            case 3:
                console.log("Nota 3: Razoável 🙂");
                break;
            case 4:
                console.log("Nota 4: Bom 😀");
                break;
            case 5:
                console.log("Nota 5: Excelente 🤩");
                break;
            default:
                console.log("Nota inválida. Por favor, envie de 1 a 5.");
        }
    } else if (review === false) {
        console.log("O usuário não deixou uma review.");
    }
}
