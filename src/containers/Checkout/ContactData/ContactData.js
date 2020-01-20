import React, { Component } from 'react';

import Btn from '../../../components/UI/Button/Button';
import './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipcode: ''
    }
  }

  render() {
    return (
      <div className="ContactData">
        <h4>Enter Your Contact Data</h4>
        <form>
          <input className="Input" type="text" name="name" placeholder="Your Name"/>
          <input className="Input" type="email" name="email" placeholder="Your Email"/>
          <input className="Input" type="text" name="street" placeholder="Your Street"/>
          <input className="Input" type="number" name="zip" placeholder="Your Zip Code"/>
          <Btn btnType="Success">CONFIRM ORDER</Btn>
        </form>
      </div>
    );
  }
}

export default ContactData;
