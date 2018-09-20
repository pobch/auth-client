import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { signIn } from '../../actions'

class SignIn extends Component {
  onSubmit = (formValues, callback) => {
    this.props.signIn(formValues, () => {
      this.props.history.push('/feature')
    })
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
        <button type="submit">Sign In!</button>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage
})

export default compose(
  connect(mapStateToProps, { signIn }),
  reduxForm({ form: 'signInForm' })
)(SignIn)
