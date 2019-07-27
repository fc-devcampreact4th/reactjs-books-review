import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Error from "./pages/Error";
import withAuth from "./utils/withAuth";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signin" exact component={Signin} />
                <Route path="/" exact component={withAuth(Home)} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
