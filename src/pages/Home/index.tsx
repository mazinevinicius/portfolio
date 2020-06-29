import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowRight } from 'react-icons/fi'
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

    useEffect(() => {
        setLoading(true)
        api.get('/users/mazinevinicius').then(response => {
            setUser(response.data)
        })
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            <div id="layout" className="container">
                <div id="card">
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
                                    <a href={user?.blog}><FiLinkedin /></a>
                                    <a href="https://www.instagram.com/marquesmazine"><FiInstagram /></a>
                                    <a href="mailto:mazinevinicius@gmail.com"><FiMail /></a>
                                </div>
                                <p id="location">{user?.location}</p>
                                <div id="arrow">
                                    <Link to="" ><FiArrowRight /></Link>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Home