import React, { useState } from 'react';
import './App.css';

function App() {
  const [numerosEscolhidos] = useState([]);
  let n = ''

  function escolhendoNumero(tecla) {
    if (tecla === '+' || tecla === '-' || tecla === '*' || tecla === '/') {
      numerosEscolhidos.push(n)
      numerosEscolhidos.push(tecla)
      console.log('numeros Escolhidos', numerosEscolhidos)
      n = ''
    } else if (tecla === '=') {
      numerosEscolhidos.push(n)
      n = ''
      let resultado = 0
      if (numerosEscolhidos.includes('/')) {
        let index = numerosEscolhidos.indexOf('/')
        resultado = Number(numerosEscolhidos[index-1], 10) / Number(numerosEscolhidos[index+1], 10)
        numerosEscolhidos.splice(index, 2)
        numerosEscolhidos[index-1] = resultado
        console.log('numeros Escolhidos => /', numerosEscolhidos)
      }
      if (numerosEscolhidos.includes('*')) {
        let index = numerosEscolhidos.indexOf('*')
        resultado = Number(numerosEscolhidos[index-1], 10) * Number(numerosEscolhidos[index+1], 10)
        numerosEscolhidos.splice(index, 2)
        numerosEscolhidos[index-1] = resultado
        console.log('numeros Escolhidos => *', numerosEscolhidos)
      }
      console.log('resultado', resultado)
    } else {
      n = n + tecla.toString()
    }

  }
  let numeros = []
  for(let i = 0; i <= 9; i++) {
    if (i === 4 || i === 7 || i === 1) {
      numeros.push(<br key={ i + 10 }/>)
    }
      numeros.push(<button key={ i } onClick={ () => escolhendoNumero(i) }> { i } </button>)
  }
  return (
    <div className="App">
      <div className="calculadora">
        <div className="teclado">
          { numeros.reverse() }
          <button key={ '+' } onClick={ () => escolhendoNumero('+') }> + </button>
          <button key={ '-' } onClick={ () => escolhendoNumero('-') }> - </button>
          <button key={ '*' } onClick={ () => escolhendoNumero('*') }> * </button>
          <button key={ '/' } onClick={ () => escolhendoNumero('/') }> / </button>
          <button key={ '=' } onClick={ () => escolhendoNumero('=') }> = </button>
        </div>
        <br />
      </div>
    </div>
  );
}

export default App;
