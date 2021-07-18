import React from 'react'
import './Header.css'

function Header() {
    return (
        <nav class="">
             <ul className="nav-bar">
             <li className="link-click">=</li>
                 <li className="logo-nav-bar link"><h2>Logo</h2></li>
                 <li className="link">Home</li>
                 <li className="link">Serviços</li>
                 <li className="link">Preço</li>
                 <li className="link">Cliente</li>
                 <li className="link">Novidades</li>
                 <li className="link">Contato</li>
                 <li className="entrar-nav-bar link"><h3>Entrar</h3></li>
                
             </ul>
        </nav>
    )
}
export default Header
