import React from 'react'
import './CrescimentoVendas.css'
import crescimentoImagem from '../imagens/crescimento-vendas.jpg'
function CrescimentoVendas() {
    return (
        <div className="crescimento-vendas">
            <div className="crescimento-imagem">
                <img src={crescimentoImagem} alt=""/>
            </div>
            <div className="text-crescimento">
                <p>Nossos serviços</p>
                <h1>Crescimentos nas suas vendas</h1>
                <p>Você pode falar sobre seus serviços secundários aqui ou talvez promover sua excelente abordagem de atendimento ao cliente. Sempre prenda a atenção dos visitantes do seu site</p>
                <h4>Ver Preços</h4>
            </div>
        </div>
    )
}

export default CrescimentoVendas
