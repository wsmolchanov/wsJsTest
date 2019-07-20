import React, { Component } from 'react';
import Input   from '../input';

export default class Login extends Component {

  state = {
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMassage: 'enter the correct email',
        value: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMassage: 'enter the correct password',
        value: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      }
    }
  }

  loginHandler = () => {

  }

  registerHandler = () => {

  }

  submitHandler = event => {
    event.preventDefault()
  }

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls }
    const control = { ...formControls[controlName] }

    control.value = event.target.value
    control.touched = true
    control.valid = this.validate(control.value, control.validation)
  }

  renderInputs() {
    return inputs = Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMassage={control.errorMassage}
          onChange={event => this.onChangeHandler(event, controlName)}
         />
      )
    })
    return inputs
  }

  render() {
    return (
      <div>
        <div>
          <h1>Authorization</h1>

          <form onSubmit={this.submitHandler}>
             { this.renderInputs() }

            <button 
              type="success" 
              onClick={this.loginHandler}
            >
              Login
            </button>
            <button 
              type="success" 
              onClick={this.registerHandler}
            > 
              Register 
            </button>
          </form>
        </div>
      </div>
    )
  }
}