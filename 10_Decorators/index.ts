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