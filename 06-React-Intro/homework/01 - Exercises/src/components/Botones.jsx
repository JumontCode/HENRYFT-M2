import React from "react";
import { alerts } from "./Bienvenido";


class Botones extends React.Component{
    constructor(alerts){
        super(alerts)
    }
        
    
    render(){
        return(
            <div>
                <button onClick={() => alert(alerts.m1)}>Módulo 1</button>
                <button onClick={() => alert(alerts.m2)}>Módulo 2</button>
            </div>
        )
    }
}

export default Botones;