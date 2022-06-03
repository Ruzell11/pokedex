
import ReactDOM from 'react-dom/client';
import React from "react";
import style from './index.css'
import { useEffect , useState } from "react";

import Component from './components.js'



function App(){
    return(
        <>
        <h1 className='title'>Pokemon Index</h1>
        <Component />
        </>
        
    )
}













const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)