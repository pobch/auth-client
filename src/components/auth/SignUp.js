import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { signUp } from '../../actions'

class SignUp extends Component {
  onSubmit = formValues => {
    this.props.signUp(formValues)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <legend>E-mail</legend>
          <Field 
            name="email"
            component="input"
            type="text"
          />
        </fieldset>
        <fieldset>
          <legend>Password</legend>
          <Field 
            name="password"
            component="input"
            type="password"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button type="submit">Sign Up!</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage
})

export default compose(
  connect(mapStateToProps, { signUp }),
  reduxForm({ form: 'signUpForm' })
)(SignUp)
