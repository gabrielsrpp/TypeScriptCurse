// 1 - exemplo decorator
function myDecorator() {

    console.log("Iniciando decorator!");

    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
      ) {
        console.log("Executando decorator")
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}

class myClass {
    @myDecorator()
    testing() {
        console.log("terminando execução do metodo");
    }
}

const myObj = new myClass();

myObj.testing();

// 2 - multiplos decorators
function a() {
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("executou a. ")
    }

    
}

function b() {
    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        console.log("executou a. ")
    }

    
}

class MultipleDecorators {
    @a()
    @b()
    testing() {
        console.log("Terminando execução");
    }
}

const multiple = new MultipleDecorators();

multiple.testing();

// 3 - class decorator

function classsDec(constructor: Function) {
    console.log(constructor);
    if (constructor.name === "User") {
        console.log("Criando Usuario!");
    }
}

@classsDec
class User {
    name

    constructor(name: string) {
        this.name = name;
    }
}

const teste = new User("Teste");

console.log(teste);

// 4 - decorator de metodo

function enumerable(value: boolean) {
    return function(
        target: any,
         propertKey: string,
         descriptor: PropertyDescriptor
        ) {
            descriptor.enumerable = value;
        };
}

class Machine {
    name

    constructor(name: string) {
        this.name = name;
    }
    @enumerable(false)
    showName() {
        console.log(this)
        return `O nome da maquina é: ${this.name}`;
    }
}

const trator = new Machine("Trator");

trator.showName();

console.log(trator.showName());

// 5 - acessor decorator

function enumerable1(value: boolean) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value;
    };
}

class Monster {
    name?;
    age?;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    @enumerable1(true)
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }

    @enumerable1(true)
    get showAge() {
        return `Idade do monstro é: ${this.age}`;
    }
}

const charmander = new Monster("Charmander", 10);

// Saídas esperadas:
console.log(charmander.showName);
console.log(charmander.showAge);