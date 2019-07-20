import React, { Component } from 'react';
import Input   from '../input';

export default class Register extends Component {

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <div>
          <h1>Authorization</h1>

          <form onSubmit={this.submitHandler}>
            <Input label="Username" />
            <Input label="Email" />
            <Input 
              label="Password" 
              errorMassage={'error'}
            />
            <Input 
              label="Confirm password" 
              errorMassage={'error'}
            />

            <button 
              type="success" 
              onClick={this.loginHandler}
            >
              Sign in
            </button>
            <button 
              type="success" 
              onClick={this.registerHandler}
            > 
              Check in
            </button>
          </form>
        </div>
      </div>
    )
  }
}