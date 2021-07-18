import React from 'react'
import './TelaInicio.css'
import imagemInicio from '../imagens/tela-inicio.jpg'
function TelaInicio() {
    return (
        <div className="tela-inicio">
            <div className="imagem-inicio">
                <img src={imagemInicio} alt=""/>
            </div>
            <div className="texto-tela-inicio">
                <p>Multipurpose landing template</p>
                <h1>Beautifully simple, code.</h1> 
                <p>Codelander is a beautifully simple, clean and lightweight landing page template for all types of businesses, with bold and bright colours.</p>
                <h3>Saiba mais</h3>
           </div>

        </div>
    )
}

export default TelaInicio
