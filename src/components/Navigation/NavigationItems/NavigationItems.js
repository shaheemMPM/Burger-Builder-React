import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem.js';

const navigationItems = () => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" active>Burger Builder</NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  );
}

export default navigationItems;