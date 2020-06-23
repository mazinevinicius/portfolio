import React from 'react'
import { Route, HashRouter } from 'react-router-dom'

import Home from './pages/Home'

const Routes = () => {
    return (
        <HashRouter>
            <Route component={Home} path="/" exact />
        </HashRouter>
    )
}

export default Routes