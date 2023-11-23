
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Page1 from "./pages/Page-1";
import Page2 from "./pages/Page-2";
import Page3 from "./pages/Page-3";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
​
function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dash}/>
                <Route path="/1" component={Page1}/>
                <Route path="/2" component={Page2}/>
            
           
            </Switch>
        </BrowserRouter>
    )
}
​
export default Routes;