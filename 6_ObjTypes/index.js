"use strict";
// 1 - tipo de objeto para função com interface
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} seu preço é R$ ${product.price}`);
    if (product.isAvaiable) {
        console.log("O produto esta disponivel");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvaiable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tenis", price: 129.99, isAvaiable: false });
function showUserDetails(user) {
    console.log(`O usuario tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuario é: ${user.role}`);
    }
}
const u1 = { email: "gabriel@email.com", role: "Admin" };
const u2 = { email: "joao@email.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const humano = {
    name: "Teste",
    age: 30
};
console.log(humano);
const superHumano = {
    name: "Teste",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"]
};
console.log(superHumano);
console.log(superHumano.superpowers[1]);
