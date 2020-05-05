import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png'
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 25 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner"> 
                    <img style={{ paddingTop: '30px'}} className='logo-brain' src={brain} alt='Logo' /> 
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;