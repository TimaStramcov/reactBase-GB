import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ROUTES } from "../Routing/constants";

export default function PrivateRoute({ authed, ...rest}) {
    return authed? (
        <Route {...rest}/>
    ) : (
        <Redirect to={ROUTES.SIGNIN} />
    )
}