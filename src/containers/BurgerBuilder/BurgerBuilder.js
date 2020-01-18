import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';

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
        totalPrice: 4,
        purchasable: false,
        purchasing: false
     }

     updatePurchaseState = (ingredients) => {
        let sum = 0;
        for(let item in ingredients){
            sum += ingredients[item];
        }
        this.setState({purchasable: sum > 0})
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
         this.updatePurchaseState(updatedIngredients);
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
             this.updatePurchaseState(updatedIngredients);
         }
     }

     purchaseHandler = () => {
         this.setState({purchasing: true});
     }

     purchaseCancelHandler = () => {
         this.setState({purchasing: false});
     }

    render() { 
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0;
        }
        const modalsec = this.state.purchasing ? 
                <Modal modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal> : null;

        return ( 
            <Aux>
                {modalsec}
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disabled={disableInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}/>
            </Aux>
         );
    }
}
 
export default BurgerBuilder;