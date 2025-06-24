
// context é utilizado por exemplo para authenticação do usuario


import React from 'react';
import logo from './logo.svg';
import './App.css';
// 4 - importação de componentes
import FirstComponent from './components/FirstComponent';

// 5 - desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, {Category} from './components/Destructuring';

// 6 - useState
import State from './components/State';

function App() {
// 1 - variaveis
const name: string = "Paulo";
const age: number = 30;
const isWorking: boolean = true;

// 2- funções
const userGreeting = (name: string): string => {
  return `Olá, ${name}!`;
};

// 8 - type
type textOrNull = string | null
const myText:textOrNull = "Tem algum texto aqui"
let mySecondText: textOrNull = null;
type fixed = "Isso" | "Ou" | "Aquio";

// mySecondText = "opa";
const testandoFixed:fixed = "Isso"



  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent/>
      <SecondComponent name="Segundo"/>
      <Destructuring title='Primeiro Post' content='Algum conteudo'commentsQty={10}tags={["ts", "js"]}category={Category.TS}/>
      <Destructuring title='Segundo Post' content='Mais outro conteudo'commentsQty={10}tags={["Python"]}category={Category.P}/>
      <State/>
       {myText && <p>Tem texto na variavel</p>}
        {mySecondText && <p>Tem texto na variavel</p>}
    </div>
  );
}

export default App;
