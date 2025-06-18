// 1 - tipo de objeto para função com interface
function showProductDetails(product) {
    console.log("O nome do produto \u00E9 ".concat(product.name, " seu pre\u00E7o \u00E9 R$ ").concat(product.price));
    if (product.isAvaiable) {
        console.log("O produto esta disponivel");
    }
}
var shirt = {
    name: "Camisa",
    price: 19.99,
    isAvaiable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tenis", price: 129.99, isAvaiable: false });
function showUserDetails(user) {
    console.log("O usuario tem o e-mail: ".concat(user.email));
    if (user.role) {
        console.log("A fun\u00E7\u00E3o do usuario \u00E9: ".concat(user.role));
    }
}
var u1 = { email: "gabriel@email.com", role: "Admin" };
var u2 = { email: "joao@email.com" };
showUserDetails(u1);
showUserDetails(u2);
var fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
var coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
var humano = {
    name: "Teste",
    age: 30
};
console.log(humano);
var superHumano = {
    name: "Teste",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"]
};
console.log(superHumano);
console.log(superHumano.superpowers[1]);
var arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - Readonly array
var myArray = ["Maça", "Laranja", "Banana"];
// myArray[3] = "Mamão"
console.log(myArray);
myArray.forEach(function (item) {
    console.log("Fruta: " + item);
});
myArray = myArray.map(function (item) {
    return "Frutas: ".concat(item);
});
console.log(myArray);
// number[]
var myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]
// const mixedArray: fiveNumbers = [1, true, "teste", 4,  5] // só um tipo
console.log(myNumberArray);
var anotherUser = ["Teste", 30];
console.log(anotherUser[0]);
anotherUser[0] = "João";
console.log(anotherUser[0]);
// anotherUser[1] = "teste" /// só vai funcionar com os tipos tipados na tupla
//  9 - tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
