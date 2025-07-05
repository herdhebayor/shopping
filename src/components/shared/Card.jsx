/** @format */

import React from 'react'
import './Card.css' // Assuming you have a CSS file for styling

function Card({children}){
   
    return(
        <div className='card'>{children}</div>
    )
}

export default Card
