import axios from 'axios'
import { AUTH_USER, AUTH_ERROR } from './types'

export const signUp = (formValues, callback) => async (dispatch) => {
  try {
    const { email, password } = formValues
    const response = await axios.post('http://localhost:3090/signup', { email, password })

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    })

    localStorage.setItem('token', response.data.token)
    callback() // auto redirect to another route

  } catch (error) {
    if (error.response) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data.error || error.response.data // <json> || <string>
      })
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: 'Connection Problem, or Unknown Error'
      })
    }
  }
}

export const signIn = (formValues, callback) => async (dispatch) => {
  try {
    const { email, password } = formValues
    const response = await axios.post('http://localhost:3090/signin', { email, password })

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    })

    localStorage.setItem('token', response.data.token)
    callback() // auto redirect to another route

  } catch (error) {
    if (error.response) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data.error || error.response.data // <json> || <string>
      })
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: 'Connection Problem, or Unknown Error'
      })
    }
  }
}

export const signOut = () => {
  localStorage.removeItem('token')

  return {
    type: AUTH_USER,
    payload: ''
  }
}
