import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Error from "./pages/Error";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signin" exact component={Signin} />
                <Route path="/" exact component={Home} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
