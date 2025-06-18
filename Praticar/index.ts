                    //////////////////////////   🔍 O que é o TypeScript?  //////////////////////////

// O TypeScript é um superset (superconjunto) de JavaScript, o que significa que todo código JavaScript válido também é válido em TypeScript — mas o contrário não é verdade.

// Mais abaixo:

// TypeScript é uma linguagem de programação desenvolvida pela Microsoft, que adiciona tipagem estática ao JavaScript. Isso quer dizer que você pode especificar os tipos de variáveis, parâmetros, funções, etc., e o compilador verifica se esses tipos estão sendo usados corretamente antes de rodar o código.

// Ele é transpilado (convertido) para JavaScript para ser executado em navegadores ou ambientes como o Node.js.

// 🎯 Para que serve o TypeScript?

// Principais objetivos e vantagens do TypeScript:

// Detecção de erros em tempo de desenvolvimento

// Exemplo:

// let idade: number = 25;
// idade = "vinte e cinco"; // erro: não pode atribuir string a um number
// Facilita o desenvolvimento de aplicações grandes

// Organiza melhor o código, ajuda a evitar bugs e torna o código mais fácil de manter.

// Suporte a recursos modernos do JavaScript + recursos extras

// Suporte a classes, interfaces, decorators, enums, generics etc.

// Ajuda na documentação

// O uso de tipos já serve como uma documentação do que a função ou variável deve receber e retornar.

// Exemplo
// JavaScript:
// function somar(a, b) {
//   return a + b;
// }

//
// TypeScript:
// function somar(a: number, b: number): number {
//   return a + b;
// }
//

// | Característica                            | JavaScript           | TypeScript             |
// | ----------------------------------------- | -------------------- | ---------------------- |
// | Tipagem                                   | Dinâmica             | Estática (opcional)    |
// | Tempo de erro                             | Em tempo de execução | Em tempo de compilação |
// | Escalabilidade                            | Limitada             | Alta                   |
// | Sintaxe extra (interfaces, generics etc.) | ❌ Não tem           | ✅ Sim                 |



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 1. Criando uma Classe Simples

// Crie uma classe Pessoa com:

//     Propriedades: nome, idade

//     Método: apresentar() que imprime "Olá, meu nome é {nome} e tenho {idade} anos."


                    //////////////////////////   Classe Simples  //////////////////////////



// declara a classe chamada "Pessoa"
class Pessoa {

    // Declarar a propiedade "nome" do tipo string
    nome: string // definir o tipo string para texto
    idade: number // definir o tipo number para numericos

    // Construtor da classe: é chamado automaticamente ao criar um novo objeto no caso "Pessoa"
    constructor(nome : string, idade: number) {

        // Atribuir o valor do parametro "nome" à propiedade "nome" do objeto
        this.nome = nome
        this.idade = idade
    }
    // Metodo "apresentar", que pertence à classe "Pessoa"
    // Fara com que ele imprima uma mensagem no console utilizando as propiedades do objeto
    mostrar(): void {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
    
}

// Cria uma nova instancia do "objeto" da classe "Pessoa", passando os valores para o construtor
const pessoa1 = new Pessoa("Paulo", 21)

// Chamar o metodo "mostrar" da instancia criada, imprimindo a mensagem no console
pessoa1.mostrar()



                    //////////////////////////   Conceitos Envolvidos  //////////////////////////



//  class | Define uma classe, no caso um modelo para criar objetos
//
//  constructor | Método especial executado para "Instanciar um objeto"
//
//  this | Refere-se ao "objeto atual" da classe ( a instância criada )
//
//  nome: string | Define a propiedade e seu "tipo" no caso (TypeScript)
//
//  void | Indica que o método não retorna nenhum valor
//
//  console.log() | Função que imprime algo no console - Útil para depuração de mensagens



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2. Construtor e Atributos Privados

// Crie uma classe ContaBancaria com:

//     saldo como privado (private)

//     Método depositar(valor: number)

//     Método verSaldo() que imprime o saldo




                    //////////////////////////   Construtor e Atributos Privados  //////////////////////////

// Declara a classe "ContaBancaria"
class ContaBancaria {

    // Propiedade privada: não pode ser acessada diretamente de fora da sua classe
    private saldo: number

    // O construtor inicializa a conta com saldo inicial
    constructor(saldoInicial: number) {
        this.saldo = saldoInicial // "this.saldo" refere-se á propiedade da classe
    }
    // Método público para depositar dinheiro na conta
    depositar(valor: number): void {
        // Adiciona o valor informado ao saldo atual
        this.saldo += valor
        console.log(`Depósito de R$${valor} Realizado com sucesso !!!`)
    }

    // Método publico que exibe o saldo atual da conta
    verSaldo(): void {
        console.log(`Seu saldo atual é de R$${this.saldo}`)
    }
} // Fecha a classe

//  Aqui é onde o código de execução deve ficar (fora da classe)

    // Cria uma nova conta com R$100 de saldo inicial
    const minhaConta = new ContaBancaria(100)

    // Deposita R$50 na conta
    minhaConta.depositar(50)  // Saida: Depósito de R$50 realizado com sucesso

    // Exibe o saldo atual
    minhaConta.verSaldo()

                        //////////////////////////   Conceitos Envolvidos  //////////////////////////


//  private | A propiedade só pode ser usada "dentro da classe"
//
//  this.saldo | Refere-se á propiedade instancia atual
//
//  depositar() | Metodo que modifica o estado da classe (adiciona saldo)
//
//  verSaldo() | Método que lê/mostra o valor de uma propiedade
//
//  void | Indica que o método não retorna nenhum valor
//
// minhaConta | um objeto da classe ContaBancaria



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                        //////////////////////////   Getters e Setters  //////////////////////////


// 3. Getters e Setters

// Adicione à classe anterior:

//     Getter e setter para o saldo

//     Valide no setter que o saldo nunca pode ser negativo


// Foi criado outra para diferenciar

// Define a classe "ContaBancaria"
class ContaBancariaGetter {

    // A propiedade "_saldo" é privada para proteger o dano real
    private _saldo:number
    
    // Construtor que recebe o saldo inicial
    constructor(saldoInicial: number) {
        this._saldo = saldoInicial
    }

    // Getter publico: permite acessar o saldo fora da classe
    get saldo(): number {
        return this._saldo // Retorna o saldo atual
    }

    // Setter publico: permite modificar o saldo com validação
    set saldo(novoSaldo: number) {
        // Verifica se o novo saldo é negativo
        if (novoSaldo < 0) {
            console.log("Erro: o saldo não pode ser negativo")
            return // Encerra a função sem alterar o saldo
        }
        this._saldo = novoSaldo // Atribui o novo saldo à propiedade privada
    }

    // Metodo para exibir o saldo
    verSaldo(): void {
        console.log(`Saldo atual: ${this._saldo}`)
    }
}
// Exemplo de uso
const conta = new ContaBancariaGetter(150);
conta.verSaldo();      // R$150
// Usando o setter para atualizar com valor válido
conta.saldo = 300;     // usa o setter
console.log(conta.saldo); // usa o getter


                        //////////////////////////   Conceitos Envolvidos  //////////////////////////

//  private _saldo | Convenção comum para atributos privados manipulados por getter/setter
//
//  get saldo()	Permite acesso seguro ao saldo (como se fosse uma propriedade)
//
// set saldo()	Permite alterar o valor com validação de regra de negócio
//
// verSaldo()	Método utilitário que usa o valor interno diretamente