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

// 10 - Visibilidade 

// 11 - Visibilidade - pulic

class C {
    public x = 10
}

class D extends C {

}

const cInstance = new C()

console.log(cInstance.x)

const dInstance = new D()

console.log(dInstance.x)

// 12 - Visibilidade : protected
class E {
    protected x = 10


}

class F extends E {
    showX() {
        console.log("X: " + this.x)
    }
}

const fInstance = new F()

fInstance.showX()

// 13  - Visibilidade : private

class PrivateClass {
    private name = "Private"

    showName() {
        return this.name
    }

    private privateMethod() {
        console.log("Metodo privado")
    }

    showPrivateMethod() {
        this.privateMethod()
    }
}

const pObj = new PrivateClass()

// console.log(pObj.name)

console.log(pObj.showName())
// console.log(pObj.privateMethod())
pObj.showPrivateMethod()

// 14 Static Members

class StaticMembers {
   static prop = "Teste static"
    
    static staticMethod() {
        console.log("Este é um metodo estatico")
    }
}

console.log (StaticMembers.prop)

StaticMembers.staticMethod()


// 15 - generic class
class item<T, U> {
    first
    second
    

    constructor(first: T, second: U) {
        this.first = first
        this.second = second
    }

    get showFirst() {

        return `O first é: ${this.first}`
    }
}

const newItem = new item("caixa", "surpresa")

console.log(newItem)

console.log(newItem.showFirst)
console.log(typeof newItem.showFirst)

const secondItem = new item(12, true)

console.log(secondItem.showFirst)
console.log(typeof secondItem.first)


// 16 - parameter properties

class ParameterProperties {

    constructor (public name: string, private qty: number, private price: number) {

        this.name = name
        this.qty = qty
        this.price = price

    }

    get showQty() {
        return `Qtd total: ${this.qty}`
    }

    get showPrice() {
        return ` Qtd total: ${this.price}`
    }
}

const newShirt = new ParameterProperties("camisa", 5, 19.99)

console.log(newShirt.name)

// console.log(newShirt.price)

console.log(newShirt.showPrice)

console.log(newShirt.showQty)