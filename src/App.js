import React, { useState } from 'react';
import './App.css';
import logos from "./media/logo.png";
import Boton from './componentes/Boton';
import Pantalla from './componentes/pantalla.js';
import BotonClear from './componentes/boton-clear.js';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');
  const [ setLastResult] = useState(null);

  const agregarInput = valor => {
    if (input === 'Error') {
      setInput(valor);
    } else {
    
      const newInput = input.startsWith('Total: ') ? input.slice(7) : input;

      if (['+', '-', '*', '/'].includes(valor)) {
        try {
          const result = evaluate(newInput).toString();
          setInput(result + valor);
          setLastResult(result);
        } catch (error) {
          setInput('Error');
        }
      } else {
        setInput(newInput + valor);
      }
    }
  };

  const calcular = () => {
    if (input.trim() === '') {
      setInput('Error');
      return;
    }

    try {
      const newInput = input.startsWith('Total: ') ? input.slice(7) : input;
      const resultado = evaluate(newInput).toString();
      setInput(`Total: ${resultado}`);
      setLastResult(resultado);
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="App">
      <div className='logo'>
        <img
          src={logos}
          className='imagen'
          alt='logo'
        />
      </div>
      <div className='calculadora'>
      
        <Pantalla input={input} />
        <div className='fila1'>
        
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <BotonClear manejarClear={() => setInput('')} imagen='reset'></BotonClear>
       
        </div>
        <div className='fila1'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila1'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
          
        </div>
        <div className='fila1'>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila1'>
        <Boton manejarClick={calcular}>=</Boton>
        
          
        </div>
      </div>
    </div>
  );
}

export default App;
