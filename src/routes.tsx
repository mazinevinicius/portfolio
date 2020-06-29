import React from 'react'
import { Route, HashRouter } from 'react-router-dom'


import Navbar from './components/Navbar'
import Home from './pages/Home'
import Education from './pages/Education'



const Routes = () => {
    return (
        <HashRouter>
            <Navbar>
                <Route component={Home} path="/" exact />
                <Route component={Education} path="/education" />
            </Navbar>
        </HashRouter>
    )
}

export default Routes