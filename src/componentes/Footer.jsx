import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <>
        <div className="foot">
            <div className="logo-footer">
                <h3>Code.</h3>
                <p>A empresa que se dispõe a te entregar os melhores recursos para o crescimento da sua empresa.</p>
            </div>
            <div className="sobre-nos-footer">
                <h3>Sobre Nós</h3>
                <p>Gostamos de fazer negócios na Code para a satisfação de nossos clientes.</p>
            </div>
            <div className="entre-em-contato">
                <h3>Contato</h3>
                <span><i class="fas fa-map-marker-alt "> </i>  <strong> Goiânia</strong> - <strong>Goiás</strong> - <strong>Brazil</strong></span>
                <span><i class="fas fa-phone"></i> (64) 981247969</span>
                <span><i class="fas fa-envelope"> </i> email@hotmail.com</span>
            </div>
            <div className="redes">
                <h3>Redes Sociais</h3>
                <div className="icon">
                    <span><i class="fab fa-instagram i fa-2x"></i></span>
                    <span><i class="fab fa-facebook-f i fa-2x"></i></span>
                    <span><i class="fab fa-twitter i fa-2x"></i></span>
                    <span><i class="fab fa-linkedin-in i fa-2x"></i></span>
                </div>
            </div>
           
        </div>
        <p className="pe">© 2021 Code Site™ desenvolvido por <strong>Guilherme Lima</strong>. Todos os direitos reservados.</p>
        
        </>
    )
}

export default Footer
