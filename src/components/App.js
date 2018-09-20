import React, { Component } from 'react'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3>This is App Component</h3>
        {this.props.children}
      </div>
    )
  }
}

export default App
