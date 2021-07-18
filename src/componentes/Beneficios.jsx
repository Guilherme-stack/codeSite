import React from 'react'
import CardBeneficios from './CardBeneficios'
import './Beneficios.css'
import beneficio1 from '../imagens/design-thinking.png'
import beneficio2 from '../imagens/engineering.png'
import beneficio3 from '../imagens/router.png'
import beneficio4 from '../imagens/chip.png'
function Beneficios() {
    return (
        <div className="itens-beneficios">
            <CardBeneficios img={beneficio1} titulo="Estratégia" descricao="Trabalharemos com você para desenvolver a estratégia certa"></CardBeneficios>
            <CardBeneficios img={beneficio2} titulo="Automatização" descricao="Sincronização de trabalho e serviços automatizados"></CardBeneficios>
            <CardBeneficios img={beneficio3} titulo="Desenvolvimento"descricao="Servidores dedicados para implantar e testar aplicativos"></CardBeneficios>
            <CardBeneficios img={beneficio4} titulo="Atualização"descricao="Mantenha-se informado sobre todas as nossas ferramentas e tecnologias"></CardBeneficios>
        </div>
    )
}

export default Beneficios
