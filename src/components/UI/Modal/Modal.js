import React from 'react';

import './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    return ( 
        <Aux>
            <Backdrop clicked={props.modalClosed}/>
            <div className="Modal">
                {props.children}
            </div>
        </Aux>
     );
}
 
export default modal;