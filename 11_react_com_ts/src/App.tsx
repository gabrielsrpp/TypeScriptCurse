import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

// 1 - variaveis
const name: string = "Paulo";
const age: number = 30;
const isWorking: boolean = true;


  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (<p>esta trabalhando!</p>)}
    </div>
  );
}

export default App;
