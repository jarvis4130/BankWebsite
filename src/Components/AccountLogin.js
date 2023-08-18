import React from 'react'
import { useState } from 'react';

const AccountLogin = ({ verifyEmail }) => {

  const [data, setdata] = useState([
    {
      id: 1,
      name: 'Atharva Adam',
      email: 'atharvaadam@gmail.com',
      password: 'Atharva',
    },
    {
      id: 2,
      name: 'Kendall Roy',
      email: 'kendallroy@gmail.com',
      password: 'Kendall',
    }
  ]
  )

  const [authMode, setAuthMode] = useState('Sign In')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleVerifyEmail = (e) => {

    e.preventDefault()    
    // not taking null values
    if(name==='' || email==='' || password===''){
      alert('Please fill all details')
    }
    const res = data.filter((user) => (user.email === email && user.password === password))

    const sameEmail=data.filter((user)=>(user.email===email ))
    
    // check already user exist or not
    if(res.length===1){
      alert('User already exist try Signing In')
    }

    // email already exist
    else if(sameEmail.length===1){
      alert('Please enter another Email, Email already taken')
    }

    else {
      const newdata = { id: 3, name: name, email: email, password: password }

      setdata([...data, newdata])
      console.log(newdata)
      setName('');
      setEmail('');
      setPassword('');
    }

  }

  const handleLoginEmail = (e) => {

    e.preventDefault()
    const res = data.filter((user) => (user.email === email && user.password === password))

    console.log("res:", res);
    console.log("res length:", res.length);

    if (res.length >= 1) {
      console.log(res)
    }

    setName('');
    setEmail('');
    setPassword('');

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
            <input type="submit" value="Submit" onClick={authMode === 'Sign Up' ? handleVerifyEmail : handleLoginEmail} />
          </p>
        </form>

      </div>
      <div className="circle c1"></div>
      <div className="circle c2"></div>
    </div>
  )
}


export default AccountLogin
