import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "../login/login";
import Inicio from "../index/index";
import Servicios from "../index/servicios";
import Contacto from "../index/contacto";
import PrivateRoute from "../auth/privaterouter";
import ejecuciones from "../ejecuciones/inicioe";

export default function AppRoutes () {
    return(
        <Router>
            <Switch>
            <PrivateRoute exact path={ [ "/ejecuciones" ] } component={ ejecuciones } />
            <Route exact path={ [ "/login" ] } component={ Login } />
            <Route exact path={ [ "/", "/index"] } component={ Inicio } />
            <Route exact path={ [ "/", "/servicios"] } component={ Servicios } />
            <Route exact path={ [ "/", "/contacto"] } component={ Contacto } />
            <Route path={ "*" } component={ () => (
                <h1 style={{ marginTop: 300 }}>
                404
                <br/>
                Página no encontrada
                </h1>
                )}/> 
            </Switch>   
        </Router>)
        ;
}

// function Home(){
//     return (
//         <h2>
//             Home
//         </h2> )
// }


