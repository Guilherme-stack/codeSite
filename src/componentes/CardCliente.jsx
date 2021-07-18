import React from 'react'
import './CardCliente.css'

function CardCliente(props) {
    return (
        <div className="card-empresa">
            <img className="empresa" src={props.marca} alt=""/>
             
        </div>
    )
}

export default CardCliente
