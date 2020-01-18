import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 2,
    bacon: 1
};

class BurgerBuilder extends Component {
    state = { 
        ingredients: {
            salad: 0,
            cheese: 0, 
            meat: 0,
            bacon: 0
        },
        totalPrice: 4
     }

     addIngredientHandler = (type) => {
         const oldCount = this.state.ingredients[type];
         const updatedCount = oldCount + 1;
         const updatedIngredients = {
             ...this.state.ingredients
         };
         updatedIngredients[type] = updatedCount;
         const priceAddition = INGREDIENT_PRICES[type];
         const oldPrice = this.state.totalPrice;
         const newPrice = oldPrice + priceAddition;
         this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
     }

     removeIngredientHandler = (type) => {
         const oldCount = this.state.ingredients[type];
         if(oldCount > 0){
             const updatedCount = oldCount - 1;
             const updatedIngredients = {
                 ...this.state.ingredients
             };
             updatedIngredients[type] = updatedCount;
             const priceDrop = INGREDIENT_PRICES[type];
             const oldPrice = this.state.totalPrice;
             const newPrice = oldPrice - priceDrop;
             this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
         }
     }

    render() { 
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0;
        }
        return ( 
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice}/>
            </Aux>
         );
    }
}
 
export default BurgerBuilder;