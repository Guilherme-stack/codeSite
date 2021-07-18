import React from 'react'
import './Email.css'
import imagemEmail from '../imagens/email2.jpg'
function Email() {
    return (
        <div className="email">
            
           <div className="text-email">
                <h5>Contato</h5>
                <h1>Questões? Entrar em contato</h1>
                <p>Teremos prazer em ajudar a responder qualquer uma de suas perguntas. Envie-nos um e-mail e entraremos em contato com você em breve.</p>
                <strong>Enviar Email</strong>
           </div>
           <div className="email-imagem">
                <img src={imagemEmail} alt=""/>
           </div>
        </div>
    )
}
export default Email
