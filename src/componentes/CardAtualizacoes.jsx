import React from 'react'
import './CardAtualizacoes.css'
function CardAtualizacoes(props) {
    return (
        <div className={props.margin?"card-atualizacao":""}>
            <div className="imagem-atualizacao">
                <img src={props.img} alt=""/>
            </div>
            <div className="text-atualizacao">
                <h2>{props.recurso}</h2>
                <p>{props.descricao}</p>
                <h5 className={props.back?"back":""}>Ver Sobre</h5>
            </div>
             
        </div>
    )
}

export default CardAtualizacoes
