import React from 'react'
import './Precos.css'
import CardPreco from './CardPreco'
function Precos() {
    return (
        <>
        <h1 className="title-preco">Contratos</h1>
        <div className="preco">
           <CardPreco price="499" descricao="Plano inicial com todos os princípios básicos incluídos" option="Basic"></CardPreco>
           <CardPreco price="899"borda="existe" popular="Popular" descricao="A opção sensata para empresas em crescimento"option="Growth" checkone="check"></CardPreco>
           <CardPreco price="1299" descricao="Tudo o que uma empresa global precisa" option="Corporate" checkone="check" checktwo="check"></CardPreco>
        </div>
        </>
    )
}

export default Precos
