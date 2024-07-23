import React from 'react';
import './App.css';
import logos from "./media/logo.png"
import Boton from './componentes/Boton.js'
import Pantalla  from './componentes/pantalla.js'
import BotonClear from './componentes/boton-clear.js'
import  {useState} from 'react'
import {evaluate} from 'mathjs'//libreria



function App() {

  const [input,setInput] = useState('');

  const agregarInput=valor=>{
    setInput(input + valor);
   
}

const calcular = () => {
  if (input.trim() === '') {
    setInput('Error');
    return;
  }
  
  try {
    setInput(evaluate(input).toString());
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
        alt='logo' />
      </div>
      <div className='calculadora'>

        <Pantalla input={input} />

        <div className='fila1'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila1'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila1'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila1'>
          <Boton manejarClick={calcular}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila1'>
          <BotonClear  manejarClear={()=>setInput('')}>Clear</BotonClear>
        </div>

      </div>
        
    </div>
  );
}

export default App;
