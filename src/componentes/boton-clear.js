import React from "react";
import '../styles/boton-clear.css'



function BotonClear(props){
    return(
        <div className="boton-clear" onClick={props.manejarClear}>
            <img className='icono-reset' src={require(`../media/${props.imagen}.png`)} alt="Reset" />
        

            {props.children}

        </div>


    );
}



export default BotonClear;