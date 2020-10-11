import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...reset }) {
    const { currentUser } = useAuth();
    return (
        <Route
            {...reset}
            component={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login" />
            }}>
        </Route>
    )
}
