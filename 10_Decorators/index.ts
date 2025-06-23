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

// 6 - property decorators
// 1 - 00001

function formatNumber() {
    return function(target: Object, propertKey: string) {
        let value: string

        const getter = function() {
            return value
        };

        const setter = function(newVal: string) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter,
        });
    }
}
class ID {
    @formatNumber()
    id;

    constructor(id: string) {
        this.id = id;
    }
}

const newItem = new ID("1");

console.log(newItem.id);

// 7 - exemplo real com class decorator

function createdDate(created: Function) {
    created.prototype.createAt = new Date();
}

@createdDate
class Book {
    id;
    createdAt?: Date;

    constructor(id: number) {
        this.id = id
    }
}

@createdDate
class Pen {
    id;

    constructor(id: number) {
        this.id = id;
    }
}

const newBook = new Book(12)

const pen = new Pen(55)

console.log(newBook);

console.log(pen);

console.log(newBook.createdAt);


// 8 - exemplo real method decorator

function checkIfUserPosted() {
    return function (
        target: Object,
        key: string | Symbol,
        descriptor: PropertyDescriptor
    ) {
        const childFunction = descriptor.value;
        // console.log(childFunction);
        descriptor.value = function(...args: any[]) {
            if(args[1] === true) {
                console.log("Usuario ja postou!")
                return null
            }else {
                return childFunction.apply(this, args)
            }
        }

        return descriptor
    }
}


class Post {
    alereadyPosted = false

    @checkIfUserPosted()
    post(content:string, alereadyPosted: boolean) {
        this.alereadyPosted = true
        console.log(`Post do usuario: ${content}`);
    }
}

const newPost = new Post();

newPost.post("Meu primeiro Post!", newPost.alereadyPosted);

newPost.post("Meu segundo Post!", newPost.alereadyPosted); // vai ser bloqueado pois foi feito para que : se um ja foi postado ele bloqueia