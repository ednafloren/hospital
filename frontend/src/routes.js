
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Page1 from "./pages/1";


import Dash from "./pages/dash";
function Loutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact component={Dash}/>
                <Route path="/1" component={Page1}/>
            
            </Routes>
        </BrowserRouter>
    );
}
export default Loutes;