import React from 'react';

import Aux from '../../hoc/Aux';
import './OrderSummary.css';
import Btn from '../UI/Button/Button';

const orderSummary = (props) => {

    const IngredientSummary = Object.keys(props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: "capitalize"}}>
                            {igKey}
                        </span> : {props.ingredients[igKey]}
                    </li>  
                );
            });

    return ( 
        <Aux>
            <h3>Order Summary</h3>
            <p>A Delicious Burger With Following Ingredients</p>
            <ul>
                {IngredientSummary}
            </ul>
            <p><strong>Total Price : {props.price.toFixed(2)} $</strong></p>
            <Btn btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Btn>
            <Btn btnType="Success" clicked={props.purchaseCheckout}>CHECKOUT</Btn>
        </Aux>
     );
}
 
export default orderSummary;