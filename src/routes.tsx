import React from 'react'
import { Route, HashRouter } from 'react-router-dom'


import Home from './pages/Home'
import Navbar from './components/Navbar'

const Routes = () => {
    return (
        <HashRouter>
            <Navbar>
                <Route component={Home} path="/" exact />
            </Navbar>
        </HashRouter>
    )
}

export default Routes