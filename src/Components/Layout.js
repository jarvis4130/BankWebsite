import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div className='sidebar'>
      <nav className='nav-bar'>
        <ul className='app-header'>
          <li>
            <Link className='text-link' to="/">Account Login</Link>
          </li>
          <li>
            <Link className='text-link' to="/ShowUserDetails">Account Details/ Pin</Link>
          </li>
          <li>
            <Link className='text-link' to="/OnlinePayment">Online Payment</Link>
          </li>
          <li>
            <Link className='text-link' to="/Loan">Loan</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout
