import React from 'react'
import GoogleIcon from '../../assets/images/googleIcon.png'
import { useGoogleLogin } from '@react-oauth/google'

const Login = () => {
  const handleLoginSuccess = async credentialResponse => {
    console.log('Google Login Success', credentialResponse)
    const { access_token: jwtLoginToken } = credentialResponse
    console.log(jwtLoginToken)
    try {
      const response = await fetch('http://localhost:5003/api/login/verify', {
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

  const login = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: handleLoginFailure
  })

  return (
    <div className='flex justify-center items-center'>
      <button
        onClick={() => login()}
        className='flex items-center px-6 py-2 bg-[#8E4338] text-white rounded-md hover:bg-[#7E4338] transition-colors shadow-md'
      >
        <img src={GoogleIcon} alt='Google icon' className='w-5 h-5 mr-2' />
        Sign in with Google
      </button>
    </div>
  )
}

export default Login
