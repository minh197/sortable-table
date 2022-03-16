import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateTable from "./CreateTable";
import App from "./App";
import NotFound from "./NotFound";
const Router = () =>(
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={CreateTable}/>
        <Route path="/name/:nameID" component={App}/>
        <Route  component={NotFound}/>
    </Switch>
    
    </BrowserRouter>
);
export default Router;