import React from 'react'
import { FaGithub } from 'react-icons/fa'

import './styles.css'

const Repositories = () => {
    return (
        <div>
            <div className="container">
                <div id="title">
                    <h1>Repositórios</h1>
                    <p>Repositórios, trabalhos e estudos publicados no Github <FaGithub/></p>
                </div>

                <div id="vertical-card">
                    <h1><FaGithub /></h1>
                    <h3>portfolio</h3>
                    <small>Última atualização: 21/04/2019</small>
                    <p>Repositório do meu próprio portfólio. Desenvolvido em</p>
                    <small id="link-repositorio"><a href="">https://github.com.br</a></small>
                </div>
            </div>
        </div>
    )
}

export default Repositories