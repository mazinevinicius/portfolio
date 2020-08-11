import React, { useState, useEffect } from 'react'
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi'
import Fade from '@material-ui/core/Fade'
import Loader from 'react-loader-spinner'

import api from '../../services/api'

import './styles.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

interface User {
    id: number,
    avatar_url: string,
    html_url: string,
    name: string,
    bio: string,
    company: string,
    location: string,
    email: string,
    blog: string,

}

const Home = () => {
    const [user, setUser] = useState<User>()
    const [loading, setLoading] = useState(true)
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setLoading(true)
        api.get('/users/mazinevinicius').then(response => {
            setUser(response.data)
        })
        setTimeout(() => {
            setLoading(false)
        }, 1000)
        setChecked(true)
    }, [])

    return (
        <>
            <div id="layout" className="container">
                <div className="card">
                    {loading
                        ? (
                            <Loader
                                type="Oval"
                                color="#4e73df"
                                height={100}
                                width={100}
                                timeout={3000}
                            />
                            
                        )
                        : (
                            <>
                            <Fade 
                                in={checked}
                                {...(checked ? { timeout: 1000 } : {})}
                            >
                                <div>
                                <picture>
                                    <img src={user?.avatar_url} alt="Avatar GitHub" />
                                </picture>
                                <h1>{user?.name}</h1>
                                <p id="title">Desenvolvedor Web</p>
                                <hr className="solid" />
                                <div id="contactAndJob">
                                    <h4>{user?.company}</h4>
                                    <h4 id="verticalDivider">|</h4>
                                    <a href={user?.html_url}><FiGithub /></a>
                                    <a href={'https://'+user?.blog}><FiLinkedin /></a>
                                    <a href="https://www.instagram.com/marquesmazine"><FiInstagram /></a>
                                    <a href="mailto:mazinevinicius@gmail.com"><FiMail /></a>
                                </div>
                                <p id="location">{user?.location}</p>
                                </div>
                            </Fade>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Home