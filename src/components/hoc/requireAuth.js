import React, { Component } from 'react'
import { connect } from 'react-redux'

export default DecoratedComponent => {
  class Decorator extends Component {
    shouldNavigateAway = () => {
      if (!this.props.auth) {
        this.props.history.push('/')
      }
    }
    
    componentDidMount() {
      this.shouldNavigateAway()
    }

    componentDidUpdate() {
      this.shouldNavigateAway()
    }

    render() {
      return <DecoratedComponent {...this.props} />
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth.authenticated
  })

  return connect(mapStateToProps)(Decorator)
}
