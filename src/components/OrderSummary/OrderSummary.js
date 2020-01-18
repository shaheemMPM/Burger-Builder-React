import React from 'react';

import Aux from '../../hoc/Aux'
import './OrderSummary.css'

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
        </Aux>
     );
}
 
export default orderSummary;