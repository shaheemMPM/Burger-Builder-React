import React from 'react';

import Burger from '../../Burger/Burger';
import Btn from '../../UI/Button/Button';
import './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className="CheckoutSummary">
      <h1>We hope it taste well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Btn
        btnType="Danger"
        clicked={props.checkoutCancelled}>CANCEL</Btn>
      <Btn
        btnType="Success"
        clicked={props.checkoutConfirmed}>CONTINUE</Btn>
    </div>
  );
}

export default checkoutSummary;
