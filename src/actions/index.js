import axios from 'axios'
import { AUTH_USER, AUTH_ERROR } from './types'

export const signUp = formValues => async (dispatch) => {
  try {
    const { email, password } = formValues
    const response = await axios.post('http://localhost:3090/signup', { email, password })
    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    })
  } catch (error) {
    if (error.response) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data.error || error.response.data
      })
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: 'Connection Problem, or Unknown Error'
      })
    }
  }
}
