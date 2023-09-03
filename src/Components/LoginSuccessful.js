import React from 'react'

const LoginSuccessful = ({ text , LoginStateChange}) => {
  return (
    <div className='login-successful'>
      <h1>{text}</h1>
      <input type="submit" value="LogOut"  onClick={LoginStateChange}/>
    </div>
  )
}

export default LoginSuccessful
