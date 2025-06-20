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


// 6 - this

class Truck {
    model
    hp

    constructor(model: string, hp: number) {
        this.model = model
        this.hp = hp
    }
    
    showDetails() {
        console.log(`Caminhão do modelo : ${this.model}, que tem ${this.hp} cavalos de potência`)
    }
}

const volvo = new Truck("Volvo", 400)
const scania = new Truck("Scania", 500)

volvo.showDetails()
scania.showDetails()

// 7 - Utilizando getters

class Person {
    name
    surname

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return this.name + " " + this.surname
    }
}

const testeTESTE = new Person("teste", "TESTE")

console.log(testeTESTE.name)

console.log(testeTESTE.fullName)

// 8 - Utilizando setters

class Coords {

    x!: number
    y!: number

    set fillX(x: number) {
        if (x === 0) {
            return
        }

        this.x = x
        console.log("X inserido com sucesso")
    }

    set fillY(y: number) {
        if (y === 0) {
            return
        }

        this.y = y
        console.log("Y inserido com sucesso")
    }

    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillX = 15
myCoords.fillY = 0 // Isso não altera o valor de y, pois é 0
myCoords.fillY = 10

console.log(myCoords)

console.log(myCoords.getCoords)

// 9 - Herança de interfaces - implements

interface   showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return `O titulo do post é ${this.title}`
    }
}

const myPost = new blogPost("Hello Word")

console.log(myPost.itemTitle())

class TestingInterface implements showTitle {
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return `O titulo é:  ${this.title}`
    }
}

// 9 - Override de métodos

class Base {
    someMethod() {
        console.log("alguma coisa")
    }
}

class Nova extends Base {
    someMethod(): void {
        console.log("testando outra coisa")
    }
}

const myObject = new Nova()

myObject.someMethod()

// 10 - Visibilidade : public

class C {
    public x = 10
}

class D extends C {

}

const cInstance = new C()

console.log(cInstance.x)

const dInstance = new D()

console.log(dInstance.x)