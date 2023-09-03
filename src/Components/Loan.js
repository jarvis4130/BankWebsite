import React from 'react'
import { useState } from 'react'

const Loan = ({ loanDetails }) => {

  const [loanAmount, setLoanAmount] = useState('')
  const [userEmail,setUser]=useState('')
  const [loanType,setLoanType]=useState('')

  const LoanApplication=(e)=>{
    e.preventDefault()

    loanDetails({userEmail,loanAmount,loanType})
    setUser('')
    setLoanAmount('')
    setLoanType('')
  }

  return (
    <div className="outer-container loan-outer-container">

      <h1>Easy Loan Accesible.</h1>

      <div className="inner-container loan-inner-container">

        <form className='form-input'>
          <p>
            <label id='user-id'>Your UserID:</label>
            <input type="text" placeholder='Username@gmail.com' onChange={(e)=>setUser(e.target.value)} />
          </p>

          <p>
            <label >Loan Amount:</label>
            <input type="number" placeholder=' ₹ 1,00,000/-' onChange={(e) => setLoanAmount(e.target.value)} />
          </p>

          <p>
            <label>Select Type of Loan:</label>
            <select name="loan" id="loan" className='loan-options' onChange={(e) => setLoanType(e.target.value)} value={loanType} >
            <option value="">------- Select a Loan Type -------</option>
              <option value="Car Loan">Car Loan (15%)</option>  
              <option value="Home Loan">Home Loan (8%-12%)</option>
              <option value="Gold Loan">Gold Loan (10%) for 1Kg</option>
            </select>
          </p>

          <p>
            <input type="submit" value=" Apply Now " onClick={LoanApplication} />
          </p>

        </form>

      </div>
    </div>
  )
}

export default Loan
