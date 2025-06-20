// 1 - generics
function showData(arg) {
    return "O dado \u00E9: ".concat(arg);
}
console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(true));
console.log(["teste"]);
// 2 - Constraint em Generics
function showProductName(obj) {
    return "O nome do produto \u00E9: ".concat(obj.name);
}
var myObj = { name: "Porta", cor: "Branca" };
var otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
var thirdObj = { price: 19.99, category: "Roupa" };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
var myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
var myPen = { name: "Caneta BIC   ", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return "A chave ".concat(String(key), " est\u00E1 presente no objeto e tem o valor de ").concat(obj[key], " ");
}
var server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return "".concat(obj[name]);
}
var myChar = {
    name: "Paulo",
    age: 30,
    hasDriveLicense: true
};
console.log(showCharName(myChar, 'name'));
// 6 - typeof type operator
var userName = "Mathues";
var userName2 = "João";
var userName4 = "Joaquim";
var newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminha para pouca carga"
};
function showKm(km) {
    console.log("O veiculo tem a km de: ".concat(km));
}
showKm(newTruck.km);
var newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
var someVar = 5;
