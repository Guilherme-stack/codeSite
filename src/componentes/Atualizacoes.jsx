import React from 'react'
import "./Atualizacoes.css";
import CardAtualizacoes from './CardAtualizacoes';
import imagem1 from '../imagens/remoto-house.jpg'
import imagem2 from '../imagens/google-ranking.jpg'
import imagem3 from '../imagens/comunicacao.jpg'
function Atualizacoes() {
    return (
        <>
        <h1 className="title-atualizacao">Recurso Disponiveis</h1>
        <div className="atualizacoes">
            <CardAtualizacoes margin="existe" img={imagem1} descricao="
Facilitando a conexão com todos os clientes em todo o mundo" recurso="Trabalho Remoto"></CardAtualizacoes>
            <CardAtualizacoes margin="existe" back="exist" img={imagem2}descricao="
Nós classificamos o número um no Google em várias palavras-chave. Leia sobre nossas estratégias de SEO" recurso="Ranking do Google"></CardAtualizacoes>
            <CardAtualizacoes img={imagem3}  descricao="Tornamos nossos serviços de suporte ao cliente fáceis de acessar" recurso="Comunicação"></CardAtualizacoes>
        </div>
        </>
    )
}

export default Atualizacoes
 