import React from 'react'
import { useState } from 'react';

const AccountLogin = ({ signIn,signUp }) => {


  const [authMode, setAuthMode] = useState('Sign In')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignEmail=(e)=>{
    e.preventDefault()

    signIn({email,password})
    setEmail('')
    setPassword('')
  }

  const handleLoginEmail=(e)=>{
    e.preventDefault()

    signUp({name,email,password})
    setName('')
    setEmail('')
    setPassword('')
  }
  

  const changeAuthMode = () => {
    setAuthMode(authMode === 'Sign In' ? 'Sign Up' : 'Sign In');
  }
  return (
    <div className="outer-container">
      <div className="inner-container"  >
        <div className="form-header">
          {authMode}
          <p>If not registered yet?
            <span style={{ color: '#2773a5' }}
              onClick={changeAuthMode}>
              {authMode === 'Sign In' ? 'Sign Up' : 'Sign In'}
            </span>
          </p>
        </div>
        <form className='form-input'>
          {
            authMode === 'Sign Up' &&
            <p>
              <label>Name:</label>
              <input type="text" required placeholder='FirstName Surname' name="" id="" onChange={(e) => { setName(e.target.value) }} />
            </p>
          }
          <p>
            <label> Your Email:</label>
            <input type="email" required placeholder='xyz@gmail.com' onChange={(e) => { setEmail(e.target.value) }} />
          </p>

          <p>
            <label>Password:</label>
            <input type="password" required name="" id="" placeholder='atleat 8 charachters' onChange={(e) => { setPassword(e.target.value) }} />
          </p>

          <p>
            <input type="submit" value="Submit" onClick={authMode === 'Sign Up' ? handleLoginEmail : handleSignEmail} />
          </p>
        </form>

      </div>
      <div className="circle c1"></div>
      <div className="circle c2"></div>
    </div>
  )
}


export default AccountLogin
