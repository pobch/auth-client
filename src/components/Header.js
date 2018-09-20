import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './headerStyles.css'

class Header extends Component {
  renderLinks = () => {
    if (this.props.authenticated) {
      // a user has logged in
      return (
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      )
    } else {
      // a user has not logged in
      return (
        <div>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="header">
        <Link to="/">Home</Link>
        {this.renderLinks()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
})

export default connect(mapStateToProps)(Header)
