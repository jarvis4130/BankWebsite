import React from 'react'
import { useState } from 'react';

const ShowUserDetails = ({ data }) => {
    
    const [ShowPin,setShowPin]=useState(false)

    const showPin=()=>{
        setShowPin(true)
    }

    return (
        <div className='user-details-container'>
            <div className="outer-container">
                <div key={data.id} className='show-user-details inner-container'>
                    <h5 className='display-text' >ID: {data.id}</h5>
                    <h5 className='display-text' >UPI ID: {data.name}</h5>
                    <h5 className='display-text' >Name: {data.email}</h5>
                    <h5 className='display-text' >Account Balance: {data.account_balance}</h5>
                    { !ShowPin && <button onClick={showPin} >Show Pin</button>}

                    { ShowPin && <h5 className='display-text' >Pin: {data.pin}</h5>}
                </div>
            </div>
        </div>
    )
}

export default ShowUserDetails
