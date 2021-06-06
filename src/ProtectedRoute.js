import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function ProtectedRoute({ isInclude, component: Component, ...rest }) {
    return (
        <Route {...rest} render={(props) => {
            if (isInclude) {
                return <Component />
            } else {
                return <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            }
        }} />


    )
}

export default ProtectedRoute
