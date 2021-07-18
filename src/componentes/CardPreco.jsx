import React from 'react'
import './CardPreco.css'
function CardPreco(props) {
    return (
        <div className={props.borda?"card-preco card-preco-borda" :"card-preco" }>
            <div className="price">
                {props.popular?<h5>Popular</h5>:""}
                <h1>${props.price}</h1>
                <p>{props.option}</p>
            </div>
            <div >
                <p className="descricao-preco">{props.descricao}</p>
                <div className="lista-services">
                    <span><i class="fas fa-check-circle text-primary"></i>Sistema Central de Negócios</span>
                    <span><i class="fas fa-check-circle text-primary"></i>Gerenciamento de Equipe</span>
                    <span><i class={props.checkone?"fas fa-check-circle text-primary":"fas fa-circle check-color"}></i>Dupla Infrainstrutura</span>
                    <span><i class={props.checktwo?"fas fa-check-circle text-primary":"fas fa-circle check-color"}></i>Recursos personalizados</span>
                </div>
             
            </div>
            <div className="contratar">
                <h4>Contratar</h4>
            </div>

        </div>
    )
}

export default CardPreco
