import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ROUTES } from "../Routing/constants";

export default function PublicRoute({ authed, ...rest}) {
    return !authed ? <Route {...rest} /> : <Route {...rest} />;
}