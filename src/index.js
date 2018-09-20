import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'
import Welcome from './components/Welcome'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import SignOut from './components/auth/SignOut'
import Feature from './components/Feature'

const store = createStore(
  reducers, 
  { auth: { authenticated: localStorage.getItem('token') } }, // initial state when the app starts
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signout" component={SignOut} />
        <Route path="/feature" component={Feature} /> {/* protected route by HOC */}
      </App>
    </BrowserRouter>
  </Provider>, 
  document.querySelector('#root')
)
