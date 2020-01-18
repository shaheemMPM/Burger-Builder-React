import React from 'react';

import BuildControl from './BuildControl/BuildControl'
import './BuildControls.css'

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'}
]

const buildControls = (props) => {
    return ( 
        <div className="BuildControls">
          {controls.map(ctrl => {
              return <BuildControl 
                        key={ctrl.label} 
                        label={ctrl.label}
                        added={() => props.ingredientAdded(ctrl.type)}
                        remove={() => props.ingredientRemove(ctrl.type)}/>
          })}  
        </div>
     );
}
 
export default buildControls;