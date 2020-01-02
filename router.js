import React from "react";
import App from "./src/Components/App/App.container";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
const RouterComp = () => {
    return(
        <Router>
            <Switch>
                <Route path="/" component={App} excat/>
            </Switch>
        </Router>
    )
}
export default RouterComp;