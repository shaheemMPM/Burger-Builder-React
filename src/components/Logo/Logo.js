import React from 'react';

import BurgerLogo from '../../assets/images/logo.png';
import './Logo.css';

const logo = (props) => {
    return ( 
        <div className="Logo">
            <img src={BurgerLogo} alt="Logo"/>
        </div>
     );
}
 
export default logo;