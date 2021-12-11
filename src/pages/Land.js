
import React, { useState } from 'react';
import { Image,Container,Box,button  } from '@chakra-ui/react';

import Kontainer2 from '../Components/kontainer/Kontainer2.js';
import Board from './Board.js';
import './Land.css';
const Land = () => {

const[dibujar,setDibujar]=useState(false);
    return (
        <>
        <div className='Land'>
        <Board></Board>
        {dibujar && (
            
            <Kontainer2/>
            
        )}
         <button onClick={()=>setDibujar(true)}> dibujar</button>

  
        
</div>
</>
        
    )
};

export default Land;