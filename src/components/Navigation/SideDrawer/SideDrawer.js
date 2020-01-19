import React from 'react';

import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import 'SideDrawer.css';

const sideDrawer = (props) => {
  return (
    <div className="SideDrawer">
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
}

export default sideDrawer;
