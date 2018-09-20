import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'
import Welcome from './components/Welcome'
import SignUp from './components/auth/SignUp'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={SignUp} />
      </App>
    </BrowserRouter>
  </Provider>, 
  document.querySelector('#root')
)
