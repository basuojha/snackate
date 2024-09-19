import React from 'react'
import { GoogleLogin } from '@react-oauth/google'

const Login = () => {
  const handleLoginSuccess = async credentialResponse => {
    console.log('Google Login Success', credentialResponse)
    const { credential: jwtLoginToken } = credentialResponse
    console.log(jwtLoginToken)
    try {
      const response = await fetch('http://localhost:1234/api/login/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: jwtLoginToken })
      })
      if (response.ok) {
        const data = await response.json()
        console.log('User is verified', data)
      } else {
        const errorData = await response.json()
        console.log('Error verifying token', errorData)
      }
    } catch (error) {
      console.error(error)
    }
  }
  const handleLoginFailure = () => {
    console.log('Google Login Failure')
  }
  return (
    <div>
      <h2>Login With Google</h2>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginFailure}
      />
    </div>
  )
}

export default Login
