var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1 - campos em classe
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var teste = new User();
console.log(teste);
teste.name = "teste";
// teste.job = "Lixeiro"
console.log(teste);
// 2 - constructor
var NewUser = /** @class */ (function () {
    function NewUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return NewUser;
}());
var Paulo = new NewUser("teste", 22);
console.log(Paulo);
// const pedro = new NewUser(12,12)
// 3 - compo readonly
var Car = /** @class */ (function () {
    function Car(name) {
        this.wheels = 4;
        this.name = name;
    }
    return Car;
}());
var fusca = new Car("Fusca");
console.log(fusca);
console.log(fusca.wheels);
fusca.name = "Fusca Turbo";
// fusca wheels = 5
// 4 - Herança e super
var Machine = /** @class */ (function () {
    function Machine(name) {
        this.name = name;
    }
    return Machine;
}());
var trator = new Machine("Trator");
var KillerMachine = /** @class */ (function (_super) {
    __extends(KillerMachine, _super);
    function KillerMachine(name, guns) {
        var _this = _super.call(this, name) || this;
        _this.guns = guns;
        return _this;
    }
    return KillerMachine;
}(Machine));
var destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
// 5 - Metodos
var Dwarf = /** @class */ (function () {
    function Dwarf(name) {
        this.name = name;
    }
    Dwarf.prototype.greeting = function () {
        console.log("Hew stranger!!!!!!!!!");
    };
    return Dwarf;
}());
var jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
// 6 - this
var Truck = /** @class */ (function () {
    function Truck(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    Truck.prototype.showDetails = function () {
        console.log("Caminh\u00E3o do modelo : ".concat(this.model, ", que tem ").concat(this.hp, " cavalos de pot\u00EAncia"));
    };
    return Truck;
}());
var volvo = new Truck("Volvo", 400);
var scania = new Truck("Scania", 500);
volvo.showDetails();
scania.showDetails();
// 7 - Utilizando getters
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.name + " " + this.surname;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var testeTESTE = new Person("teste", "TESTE");
console.log(testeTESTE.name);
console.log(testeTESTE.fullName);
// 8 - Utilizando setters
var Coords = /** @class */ (function () {
    function Coords() {
    }
    Object.defineProperty(Coords.prototype, "fillX", {
        set: function (x) {
            if (x === 0) {
                return;
            }
            this.x = x;
            console.log("X inserido com sucesso");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "fillY", {
        set: function (y) {
            if (y === 0) {
                return;
            }
            this.y = y;
            console.log("Y inserido com sucesso");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Coords.prototype, "getCoords", {
        get: function () {
            return "X: ".concat(this.x, " e Y: ").concat(this.y);
        },
        enumerable: false,
        configurable: true
    });
    return Coords;
}());
var myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 0; // Isso não altera o valor de y, pois é 0
myCoords.fillY = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
var blogPost = /** @class */ (function () {
    function blogPost(title) {
        this.title = title;
    }
    blogPost.prototype.itemTitle = function () {
        return "O titulo do post \u00E9 ".concat(this.title);
    };
    return blogPost;
}());
var myPost = new blogPost("Hello Word");
console.log(myPost.itemTitle());
var TestingInterface = /** @class */ (function () {
    function TestingInterface(title) {
        this.title = title;
    }
    TestingInterface.prototype.itemTitle = function () {
        return "O titulo \u00E9:  ".concat(this.title);
    };
    return TestingInterface;
}());
// 9 - Override de métodos
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.someMethod = function () {
        console.log("alguma coisa");
    };
    return Base;
}());
var Nova = /** @class */ (function (_super) {
    __extends(Nova, _super);
    function Nova() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Nova.prototype.someMethod = function () {
        console.log("testando outra coisa");
    };
    return Nova;
}(Base));
var myObject = new Nova();
myObject.someMethod();
// 10 - Visibilidade 
// 11 - Visibilidade - pulic
var C = /** @class */ (function () {
    function C() {
        this.x = 10;
    }
    return C;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return D;
}(C));
var cInstance = new C();
console.log(cInstance.x);
var dInstance = new D();
console.log(dInstance.x);
// 12 - Visibilidade : protected
var E = /** @class */ (function () {
    function E() {
        this.x = 10;
    }
    return E;
}());
var F = /** @class */ (function (_super) {
    __extends(F, _super);
    function F() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    F.prototype.showX = function () {
        console.log("X: " + this.x);
    };
    return F;
}(E));
var fInstance = new F();
fInstance.showX();
// 13  - Visibilidade : private
var PrivateClass = /** @class */ (function () {
    function PrivateClass() {
        this.name = "Private";
    }
    PrivateClass.prototype.showName = function () {
        return this.name;
    };
    PrivateClass.prototype.privateMethod = function () {
        console.log("Metodo privado");
    };
    PrivateClass.prototype.showPrivateMethod = function () {
        this.privateMethod();
    };
    return PrivateClass;
}());
var pObj = new PrivateClass();
// console.log(pObj.name)
console.log(pObj.showName());
// console.log(pObj.privateMethod())
pObj.showPrivateMethod();
// 14 Static Members
var StaticMembers = /** @class */ (function () {
    function StaticMembers() {
    }
    StaticMembers.staticMethod = function () {
        console.log("Este é um metodo estatico");
    };
    StaticMembers.prop = "Teste static";
    return StaticMembers;
}());
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - generic class
var item = /** @class */ (function () {
    function item(first, second) {
        this.first = first;
        this.second = second;
    }
    Object.defineProperty(item.prototype, "showFirst", {
        get: function () {
            return "O first \u00E9: ".concat(this.first);
        },
        enumerable: false,
        configurable: true
    });
    return item;
}());
var newItem = new item("caixa", "surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.showFirst);
var secondItem = new item(12, true);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
// 16 - parameter properties
var ParameterProperties = /** @class */ (function () {
    function ParameterProperties(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    Object.defineProperty(ParameterProperties.prototype, "showQty", {
        get: function () {
            return "Qtd total: ".concat(this.qty);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ParameterProperties.prototype, "showPrice", {
        get: function () {
            return " Qtd total: ".concat(this.price);
        },
        enumerable: false,
        configurable: true
    });
    return ParameterProperties;
}());
var newShirt = new ParameterProperties("camisa", 5, 19.99);
console.log(newShirt.name);
// console.log(newShirt.price)
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
// 17 - class expressions
var myClass = /** @class */ (function () {
    function class_1(name) {
        this.name = name;
    }
    return class_1;
}());
var pessoa = new myClass("Teste");
console.log(pessoa);
console.log(pessoa.name);
// 18 - abstract class
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    return AbstractClass;
}());
// const newObj = new AbstractClass(); // não pdoe criar uma instancia de uma classe abstrata
var AbstractExample = /** @class */ (function (_super) {
    __extends(AbstractExample, _super);
    function AbstractExample(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    AbstractExample.prototype.showName = function () {
        console.log("o nome \u00E9: ".concat(this.name));
    };
    return AbstractExample;
}(AbstractClass));
var newAbstractObject = new AbstractExample("Paulo");
newAbstractObject.showName();
// 19 - relação entre classes
var Dog = /** @class */ (function () {
    function Dog() {
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    return Cat;
}());
var doguinho = new Cat();
console.log(doguinho);
