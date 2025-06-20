// 1 - campos em classe
class User {
    name!:string // vou usar mas não vou iniciar : !
    age!: number
}

const teste = new User()

console.log(teste)

teste.name = "teste"

// teste.job = "Lixeiro"

console.log(teste)

// 2 - constructor
class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const Paulo = new NewUser("teste", 22)

console.log(Paulo)

// const pedro = new NewUser(12,12)

// 3 - compo readonly

class Car {
    name
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }
}

const fusca = new Car("Fusca")

console.log(fusca)

console.log(fusca.wheels)

fusca.name = "Fusca Turbo"

// fusca wheels = 5


// 4 - Herança e super

class Machine {
    name

    constructor(name:string) {
        this.name = name
    }
}

const trator = new Machine("Trator")

class KillerMachine extends Machine {
    guns

    constructor(name:string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine("Destroyer", 4)

console.log(trator)
console.log(destroyer)

// 5 - Metodos

class Dwarf {
    name

    constructor(name:string) {
        this.name = name
    }

    greeting() {
        console.log("Hew stranger!!!!!!!!!")
    }
}

const   jimmy = new Dwarf("Jimmy")

console.log(jimmy.name)

jimmy.greeting()