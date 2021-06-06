import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute({ shouldRedirect, component: Component, ...rest }) {
    return (
        <Route {...rest} >
            { shouldRedirect ? <Redirect to='/' /> : <Component />}
        </Route>
    )
}

export default ProtectedRoute


//     < ProtectedRoute
// path = "/cross-sell/dashboard"
// component = { CrossSell }
// shouldRedirect = {! this.state.routes.includes('/cross-sell/dashboard') }
//     />