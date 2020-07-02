import React from 'react'
import { Route, HashRouter } from 'react-router-dom'


import Navbar from './components/Navbar'
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experiences'
import Repositories from './pages/Repositories'



const Routes = () => {
    return (
        <HashRouter>
            <Navbar>
                <Route component={Home} path="/" exact />
                <Route component={Education} path="/education" />
                <Route component={Experience} path="/experience" />
                <Route component={Repositories} path="/repositories" />
            </Navbar>
        </HashRouter>
    )
}

export default Routes