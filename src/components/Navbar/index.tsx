import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Navbar: React.FC = (props) => {
    return (
        <div>
            <nav>
                <div>
                    <Link to="/"><small>home</small></Link>
                    <Link to="/education"><small>formação</small></Link>
                    <Link to="/experience"><small>experiência</small></Link>
                    <Link to="/repositories"><small>repositórios</small></Link>
                </div>
            </nav>

            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Navbar