import React, { useState } from 'react';
import Pintar from '../Pintar.js';

import './stylek.css';

const Kontainer2 = ()=>{

const[color,SetColor]= useState('');
const[size,SetSize]= useState('');


        return (
            <div className="container">
                <div class="tools-section">
                    <div className="color-picker-container">
                        Select Brush Color : &nbsp; 
                        <input type="color" value={color} onChange={(e) => SetColor(e.target.value)}/>
                    </div>

                    <div className="brushsize-container">
                        Select Brush Size : &nbsp; 
                        <select value={size} onChange={(e) => SetSize(e.target.value)}>
                            <option> 5 </option>
                            <option> 10 </option>
                            <option> 15 </option>
                            <option> 20 </option>
                            <option> 25 </option>
                            <option> 30 </option>
                        </select>
                    </div>
                   
                </div>

                <div class="board-container">
                    
                    <Pintar color={color} size={size}></Pintar>
                </div>
            </div>
        )
    }


export default Kontainer2