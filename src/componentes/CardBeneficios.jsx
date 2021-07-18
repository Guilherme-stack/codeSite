import React from 'react'
import "./CardBeneficios.css"
function CardBeneficios(props) {
    return (
        <div className="card-beneficio">
            <div className="card-beneficio-img">
                <img src={props.img} alt=""/>
                <h3>{props.titulo}</h3>
            </div>
            
            <div>
                <p>{props.descricao}</p>
            </div>
             
        </div>
    )
}

export default CardBeneficios
