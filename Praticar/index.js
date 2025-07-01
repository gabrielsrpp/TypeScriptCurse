"use strict";
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


// =====================================================
// MÓDULO 2 - FUNDAMENTOS
// =====================================================
// Tipos primitivos: string, number, boolean
// Declaração de variáveis com tipagem
// let nome: string = "Paulo";
// let idade: number = 25;
// let ativo: boolean = true;

// Inferência de tipo: o TypeScript entende o tipo pela atribuição
// let cidade = "Curitiba"; // tipo string inferido

//  Const vs Let
// const constante: number = 10;
// let variavel: number = 20;

//  Arrays tipados
// let numeros: number[] = [1, 2, 3];

// Tuplas: estrutura com tipos fixos e ordem definida
// let pessoa: [string, number] = ["Maria", 30];

//  Enum: conjunto de valores nomeados
// enum Cor { Vermelho, Verde, Azul }
// let c: Cor = Cor.Verde;

//  Any: tipo que aceita qualquer coisa (evitar usar)
// let valor: any = "texto";
// valor = 123;


// =====================================================
// MÓDULO 3 - AVANÇANDO EM TIPOS
// =====================================================
// Union Types: permite múltiplos tipos
// let id: number | string;
// id = 10;
// id = "dez";

// Literal Types: tipos com valor fixo
// let status: "ativo" | "inativo";
// status = "ativo";

// Type Alias: criar apelidos para tipos
// type ProdutoID = string | number;
// let prodID: ProdutoID = "abc123";

// Tipo unknown: mais seguro que any
// let valorDesconhecido: unknown = "texto";
// if (typeof valorDesconhecido === "string") {
// console.log(valorDesconhecido.toUpperCase());
// }

// Void: usado para funções que não retornam nada
// function logarMensagem(): void {
// console.log("Mensagem");
// }

// Never: função que nunca retorna (ex: erro ou loop infinito)
// function erroFatal(): never {
// throw new Error("Erro crítico");
// }


// =====================================================
// MÓDULO 4 - NARROWING
// =====================================================
// Narrowing: refinamento de tipos em tempo de execução

// function mostrarInfo(valor: number | string) {
// if (typeof valor === "string") {
// console.log("Texto: " + valor.toUpperCase());
// } else {
// console.log("Número: " + valor.toFixed(2));
// }
// }

// instanceof: para verificar se é instância de uma classe
// class Animal {}
// class Cachorro extends Animal {}

// let pet = new Cachorro();
// if (pet instanceof Cachorro) {
// console.log("É um cachorro!");
// }

// in: verificar se uma propriedade existe
// type Pessoa = { nome: string; idade: number };
// function exibir(obj: Pessoa | { empresa: string }) {
// if ("nome" in obj) {
// console.log("Pessoa: " + obj.nome);
// } else {
// console.log("Empresa: " + obj.empresa);
// }
// }

// =====================================================
// MÓDULO 5 - FUNÇÕES
// =====================================================
// Declaração de funções com tipos nos parâmetros e retorno
// function somar(a: number, b: number): number {
// return a + b;
// }

// Parâmetros opcionais
// function saudacao(nome?: string) {
// console.log("Olá " + (nome ?? "visitante"));
// }

// // Parâmetros com valor padrão
// function multiplicar(a: number, b: number = 2): number {
// return a * b;
// }

// // Funções como variáveis
// const dividir = (x: number, y: number): number => x / y;

// // Tipo de função
// type Operacao = (n1: number, n2: number) => number;
// let operacaoSoma: Operacao = somar;


// =====================================================
// MÓDULO 6 - OBJETOS TIPADOS
// =====================================================
// Objetos com tipo definido
// let carro: { modelo: string; ano: number } = {
// modelo: "Fusca",
// ano: 1980
// };

// Propriedades opcionais
// let cliente: { nome: string; vip?: boolean } = {
// nome: "João"
// };

// Propriedade readonly (só leitura)
// type Produto = {
// readonly id: number;
// nome: string;
// };

// let produto: Produto = { id: 1, nome: "TV" };
// produto.id = 2; ❌ erro: id é readonly

// Index Signature
// let estoque: { [produto: string]: number } = {
// arroz: 10,
// feijao: 5
// };

// =====================================================
// MÓDULO 7 - CRIAÇÃO DE TIPOS
// =====================================================
// Type Alias: criar tipos personalizados
// type Usuario = {
// nome: string;
// email: string;
// };

// let usuario: Usuario = { nome: "Ana", email: "ana@email.com" };

// Interface: semelhante ao type, mais usada para objetos e POO
// interface ProdutoLoja {
// nome: string;
// preco: number;
// }

// Interface com herança
// interface ProdutoEletronico extends ProdutoLoja {
// voltagem: number;
// }

// let notebook: ProdutoEletronico = {
// nome: "Notebook",
// preco: 3000,
// voltagem: 110
// };


// =====================================================
// MÓDULO 8 - CLASSES EM TYPESCRIPT
// =====================================================
// class Pessoa {
// nome: string;
// idade: number;

// constructor(nome: string, idade: number) {
// this.nome = nome;
// this.idade = idade;
// }

// apresentar() {
// console.log(Olá, sou ${this.nome} e tenho ${this.idade} anos.);
// }
// }

// Modificadores de acesso:
// public (padrão), private (só acessível internamente), protected (visível por subclasses)
// class Funcionario {
// private salario: number;

// constructor(salario: number) {
// this.salario = salario;
// }

// mostrarSalario() {
// console.log("Salário: R$" + this.salario);
// }
// }

// Herança
// class Gerente extends Funcionario {
// setor: string;
// constructor(salario: number, setor: string) {
// super(salario);
// this.setor = setor;
// }
// }


// =====================================================
// MÓDULO 9 - MÓDULOS EM TYPESCRIPT
// =====================================================
// Separar funcionalidades em arquivos usando export/import
// Exemplo de exportação:
// arquivo: saudacao.ts
// export function saudacao(nome: string) {
// return Olá, ${nome};
// }

// // arquivo: app.ts
// import { saudacao } from "./saudacao";
// console.log(saudacao("Carlos"));

// Tipos, interfaces e classes também podem ser exportados/importados

// =====================================================
// MÓDULO 10 - DECORADORES
// =====================================================
// Decorators são funções que alteram comportamentos de classes ou seus membros
// Devem estar habilitados no tsconfig.json com "experimentalDecorators": true

// Exemplo de decorator de classe
// function logarClasse(construtor: Function) {
// console.log("Classe instanciada: " + construtor.name);
// }

// @logarClasse
// class UsuarioSistema {
// constructor(public nome: string) {}
// }

// // Decorator de método
// function congelarAlvo(
// alvo: any,
// nomeMetodo: string,
// descritor: PropertyDescriptor
// ) {
// descritor.writable = false;
// }

// class Conta {
// saldo = 1000;

// @congelarAlvo
// sacar(valor: number) {
// this.saldo -= valor;
// }
// }


// =====================================================
// MÓDULO 11 - TYPESCRIPT COM REACT
// =====================================================
// Tipagem de Props em componentes
// type Props = {
// nome: string;
// };

// function Ola({ nome }: Props) {
// return <h1>Olá, {nome}!</h1>;
// }

// Tipagem de estado (useState)
// import { useState } from "react";

// function Contador() {
// const [contador, setContador] = useState<number>(0);
// return (
// <div>
// <p>Contador: {contador}</p>
// <button onClick={() => setContador(contador + 1)}>+</button>
// </div>
// );
// }

// Tipagem de eventos e refs
// function Input() {
// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// console.log(e.target.value);
// };

// return <input onChange={handleChange} />;
// }














////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1. Criando uma Classe Simples
// Crie uma classe Pessoa com:
//     Propriedades: nome, idade
//     Método: apresentar() que imprime "Olá, meu nome é {nome} e tenho {idade} anos."




//////////////////////////   Classe Simples  //////////////////////////
// declara a classe chamada "Pessoa"
class Pessoa {
    // Construtor da classe: é chamado automaticamente ao criar um novo objeto no caso "Pessoa"
    constructor(nome, idade) {
        // Atribuir o valor do parametro "nome" à propiedade "nome" do objeto
        this.nome = nome;
        this.idade = idade;
    }
    // Metodo "apresentar", que pertence à classe "Pessoa"
    // Fara com que ele imprima uma mensagem no console utilizando as propiedades do objeto
    mostrar() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
}
// Cria uma nova instancia do "objeto" da classe "Pessoa", passando os valores para o construtor
const pessoa1 = new Pessoa("Paulo", 21);
// Chamar o metodo "mostrar" da instancia criada, imprimindo a mensagem no console
pessoa1.mostrar();
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
    // O construtor inicializa a conta com saldo inicial
    constructor(saldoInicial) {
        this.saldo = saldoInicial; // "this.saldo" refere-se á propiedade da classe
    }
    // Método público para depositar dinheiro na conta
    depositar(valor) {
        // Adiciona o valor informado ao saldo atual
        this.saldo += valor;
        console.log(`Depósito de R$${valor} Realizado com sucesso !!!`);
    }
    // Método publico que exibe o saldo atual da conta
    verSaldo() {
        console.log(`Seu saldo atual é de R$${this.saldo}`);
    }
} // Fecha a classe
//  Aqui é onde o código de execução deve ficar (fora da classe)
// Cria uma nova conta com R$100 de saldo inicial
const minhaConta = new ContaBancaria(100);
// Deposita R$50 na conta
minhaConta.depositar(50); // Saida: Depósito de R$50 realizado com sucesso
// Exibe o saldo atual
minhaConta.verSaldo();
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
    // Construtor que recebe o saldo inicial
    constructor(saldoInicial) {
        this._saldo = saldoInicial;
    }
    // Getter publico: permite acessar o saldo fora da classe
    get saldo() {
        return this._saldo; // Retorna o saldo atual
    }
    // Setter publico: permite modificar o saldo com validação
    set saldo(novoSaldo) {
        // Verifica se o novo saldo é negativo
        if (novoSaldo < 0) {
            console.log("Erro: o saldo não pode ser negativo");
            return; // Encerra a função sem alterar o saldo
        }
        this._saldo = novoSaldo; // Atribui o novo saldo à propiedade privada
    }
    // Metodo para exibir o saldo
    verSaldo() {
        console.log(`Saldo atual: ${this._saldo}`);
    }
}
// Exemplo de uso
const conta = new ContaBancariaGetter(150);
conta.verSaldo(); // R$150
// Usando o setter para atualizar com valor válido
conta.saldo = 300; // usa o setter
console.log(conta.saldo); // usa o getter
//////////////////////////   Conceitos Envolvidos  //////////////////////////
//  private _saldo | Convenção comum para atributos privados manipulados por getter/setter
//
//  get saldo()	Permite acesso seguro ao saldo (como se fosse uma propriedade)
//
// set saldo()	Permite alterar o valor com validação de regra de negócio
//
// verSaldo()	Método utilitário que usa o valor interno diretamente
