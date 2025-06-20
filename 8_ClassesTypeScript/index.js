"use strict";
// 1 - campos em classe
class User {
}
const teste = new User();
console.log(teste);
teste.name = "teste";
// teste.job = "Lixeiro"
console.log(teste);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const Paulo = new NewUser("teste", 22);
console.log(Paulo);
// const pedro = new NewUser(12,12)
