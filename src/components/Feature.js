import React from 'react'
import requireAuth from './hoc/requireAuth'

const Feature = () => (
  <div style={{ color: 'red' }}>This is protected route !!</div>
)

export default requireAuth(Feature)
