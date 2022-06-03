
import ReactDOM from 'react-dom/client';
import React from "react";
import style from './index.css'
import { useEffect , useState } from "react";

import Component from './components.js'



function App(){
    return(
        <>
       <nav id="nav">
        <img src="https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-17015278258769okdi.png" width="100px"/>
       <a href="https://ruzell11.github.io/pokemon-card-generator/"><h3>Go to PokeDex</h3></a> 

    </nav>
        <Component />
        </>
        
    )
}













const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)