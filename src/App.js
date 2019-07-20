import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signin" exact />
                <Route path="/" exact />
                <Route />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
