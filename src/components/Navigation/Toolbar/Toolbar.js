import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems.js';

const toolbar = (props) => {
    return (
        <header className="Toolbar">
            <div>MENU</div>
            <div className="Logo">
              <Logo/>
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
     );
}

export default toolbar;
