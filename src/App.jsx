import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; //for botstrap css
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"; //for bootstrap js
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Movies from "./Movies";
function App()
{ 
    return (
        <div>
        <Navbar/>
           <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/movies" component={Movies} />
              <Redirect to="/" />  {/*for wrong path, it will take back to home page*/}
           </Switch> 
            
           
        </div>
    ) 
}

export default App;