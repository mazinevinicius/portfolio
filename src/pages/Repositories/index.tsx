import React, { useState, useEffect } from 'react'
import { FaGithub, FaJs, FaPhp, FaHtml5, FaCss3, FaCode, FaDatabase } from 'react-icons/fa'
import Loader from 'react-loader-spinner'
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

    useEffect(() => {
        setLoading(true)
        api.get('/users/mazinevinicius/repos?sort=interactions&per_page=100').then(response => {
            setRepositories(response.data)
        })
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    function verifyLanguage(language: string) {
        switch (language){
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
                        <Loader
                            type="ThreeDots"
                            color="#4e73df"
                            height={100}
                            width={100}
                            timeout={3000}
                        />
                    )
                    : (
                        <>
                            {repositories.map((repository, index) => (
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
                            ))}
                        </>
                    )

                }

            </div>
        </>
    )
}

export default Repositories