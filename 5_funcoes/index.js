"use strict";
// 1 - void
function whithoutReturn() {
    console.log("esta função não tem retorno!");
    // return 1
}
whithoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Ola ${name}`;
}
function preGreeting(f, UserName) {
    console.log("funfando");
    const greet = f(UserName);
    console.log(greet); // Adicione esta linha para exibir a saudação
}
preGreeting(greeting, "teste");
preGreeting(greeting, "TESTE2");
// 3 - generic functions
function lastElement(ar) {
    return ar[ar.length - 1];
}
console.log(lastElement([1, 2, 3]));
console.log(lastElement(["a", "b", "c"]));
// console.log(lastElement("Teste")) ele esta esperando uma lista
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const newObject = mergeObjects({ name: "Teste" }, { age: 30, job: "TESTE212" });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));
// console.log(biggestNumber("12", 5)) os dois tipos tenque ser igual
// 5 - especificar tipo de argumento
function mergeArrays(ar1, ar2) {
    return ar1.concat(ar2);
}
console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays([1, 2, 3], ["teste", "TESTE222"]));
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Ola ${greet} ${name}, tudo bem`;
    }
    return `Ola ${name}, tudo bem`;
}
console.log(modernGreeting("Tio")); // Saída: "Ola Tio, tudo bem"
console.log(modernGreeting("Paulo", "Dr.")); // Saída: "Ola Dr. Paulo, tudo bem"
// 7 - parametro default
