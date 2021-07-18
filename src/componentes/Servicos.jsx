import React,{useState} from 'react'
import "./Servicos.css"
import imagemServicos from '../imagens/servicos-imagem.jpg'
function Servicos() {
    const [clickweb, setClickWeb] = useState(false)
    const [clickApp, setClickApp] = useState(false)
    function clickWeb() {
        clickweb? setClickWeb(false):setClickWeb(true)
    }
    function clickAplication() {
        clickApp? setClickApp(false):setClickApp(true)
    }
 
    return (
        <div className="servicos">
            <div className="text-servicos">
                 <p>Nossos serviços</p>
                 <h1>Solving Problems</h1>
                 <p>Esta é uma ótima seção para apresentar sua empresa e mostrar seus serviços em destaque.</p>
                 <div className="services-box">
                    <h5>Web Design</h5>
                    <i onClick={clickWeb} class={clickweb? "far fa-window-minimize text-white mb-1":"fas fa-plus text-white"}></i>
                 </div>
                 <p className={clickweb?"click-web":"no-click-web"}>Algumas informações sobre seus serviços de design e desenvolvimento da web podem ser acessadas aqui. Algumas linhas devem resolver o problema.</p>
                 <div className="services-box">
                    <h5>Desenvolvimento de Aplicações</h5>
                    <i onClick={clickAplication} class={clickApp? "far  fa-window-minimize text-white mb-1":"fas fa-plus text-white"}></i>
                 </div>
                 <p className={clickApp?"click-desenvolvimento":"no-click-web"}>Mais informações sobre seus serviços de desenvolvimento de aplicativos também podem ser acessados ​​aqui. Há muito espaço disponível para você.</p>
            </div>
            <div className="imagem-servico">
                 <img src={imagemServicos} alt=""/>
            </div>
        </div>
    )
}

export default Servicos
