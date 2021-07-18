import React,{useState} from 'react'
import CardCliente from './CardCliente'
import marca1 from '../imagens/logotipo-da-brescia-metro.png'
import marca2 from '../imagens/logotipo-do-metro-de-atenas.png'
import marca3 from '../imagens/logotipo-do-behance.png'
import marca4 from '../imagens/logotipo-do-metro-de-buenos-aires.png'
import marca5 from '../imagens/logotipo-do-metro-de-londres.png'
import marca6 from '../imagens/logotipo-do-metro-de-moscou.png'
import marca7 from '../imagens/logotipo-do-metro-de-pittsburgh.png'
import marca8 from '../imagens/logotipo-do-metro-de-sao-francisco.png'
import './Clientes.css'
function Clientes() {
    const [clickone, setClickOne] = useState(true)
    const [clicktwo, setClickTwo] = useState(false)
    
    function showSlider(e) {
        if (e=="one") {
             
            setClickOne(true)
            setClickTwo(false)
        }else{
             
            setClickTwo(true)
            setClickOne(false)
        }
    }
    return (
        <>
        <h1 className="title-clientes">Para quem prestamos serviços</h1>
         <div className={clickone?"clientes-1":"clientes-1-show"}>
            <CardCliente nomemarca="Log Tech" marca={marca1}></CardCliente>
            <CardCliente nomemarca="New Tecnology" marca={marca2}></CardCliente>
            <CardCliente nomemarca="Champion Web" marca={marca3}></CardCliente>
            <CardCliente nomemarca="Company Design" marca={marca4}></CardCliente>
        </div>
        <div className={clicktwo?"clientes-2":"clientes-2-show"}>
            <CardCliente marca={marca5} nomemarca="Tech Log"></CardCliente>
            <CardCliente marca={marca6} nomemarca="Tecnologias New"></CardCliente>
            <CardCliente marca={marca7} nomemarca="Web Champion"></CardCliente>
            <CardCliente marca={marca8} nomemarca="Design Company"></CardCliente>
        </div>
        <div className="buttons">
            <span><i onClick={()=>showSlider("one")} class={clickone?"fas fa-circle btn-1 text-primary":"fas fa-circle btn-1 "}></i></span>
            <span><i onClick={()=>showSlider("two")} class={clicktwo?"fas fa-circle btn-2 text-primary":"fas fa-circle btn-1 "} ></i></span>
        </div>
        </>
    )
}

export default Clientes
