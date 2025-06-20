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
