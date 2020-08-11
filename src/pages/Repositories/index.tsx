import React, { useState, useEffect } from 'react'
import { FaGithub, FaJs, FaPhp, FaHtml5, FaCss3, FaCode, FaDatabase } from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Fade from '@material-ui/core/Fade'
import api from '../../services/api'

import './styles.css'

interface Repository {
    name: string,
    description: string,
    html_url: string,
    language: string

}

const Repositories = () => {
    const [repositories, setRepositories] = useState<Repository[]>([])
    const [loading, setLoading] = useState<Boolean>(true)
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setLoading(true)
        api.get('/users/mazinevinicius/repos?sort=interactions&per_page=100').then(response => {
            setRepositories(response.data)
        })
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        setChecked(true)
    }, [])

    function verifyLanguage(language: string) {
        switch (language) {
            case "TypeScript":
                return <FaJs />;
            case "JavaScript":
                return <FaJs />;
            case 'TSQL':
                return <FaDatabase />
            case 'PHP':
                return <FaPhp />
            case 'HTML':
                return <FaHtml5 />
            case 'CSS':
                return <FaCss3 />
            default:
                return <FaCode />

        }
    }


    return (
        <>
            <div className="container">
                    <div id="title">
                        <h1>Repositórios</h1>
                        <p>Repositórios, trabalhos e estudos publicados no Github <FaGithub /></p>
                    </div>
                    {loading
                        ? (
                        <div className="card">
                            <Loader
                                type="Oval"
                                color="#4e73df"
                                height={100}
                                width={100}
                                timeout={3000}
                            />
                            </div>
                        )
                        : (
                            <>
                                {repositories.map((repository, index) => (
                                    <Fade
                                        in={checked}
                                        {...(checked ? { timeout: 1000 } : {})}
                                    >
                                        <div
                                            id="vertical-card"
                                            key={index.valueOf()}
                                        >
                                            <h1>{verifyLanguage(repository.language)}</h1>
                                            <h3>{repository.name}</h3>
                                            <small>Linguagem utilizada: {!repository.language ? "Anotações/estudos em .md" : repository.language}</small>
                                            <p>{repository.description}</p>
                                            <small id="link-repositorio"><a href={repository.html_url}>{repository.html_url}</a></small>
                                        </div>

                                    </Fade>
                                ))}
                            </>
                        )

                    }
            </div>
        </>
    )
}

export default Repositories