import React from 'react';
import { Link } from 'react-router-dom';
import './starship.css'

function Starship(props) {
    return(
        <div className='singleShip' onClick={props.onClick}>
        {props.shipData.name}
        {props.shipData.model}
        </div>
    )
}

export default Starship;