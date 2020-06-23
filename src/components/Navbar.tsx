import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/"><small>home</small></Link>
                <Link to=""><small>experiência</small></Link>
                <Link to=""><small>formação</small></Link>
                <Link to=""><small>repositórios</small></Link>
            </div>
        </nav>
    )
}

export default Navbar