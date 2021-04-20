import './Menu.css'
import React from 'react'


const Menu = props => (
    <div className="Menu">
        <nav>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/Chart">Gráfico</a>
                </li>
            </ul>
        </nav>
    </div>
)

export default Menu