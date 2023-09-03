import React, { useState } from 'react'

const Transaction = ({ user_data }) => {

    const [payment_id, Setpayment_id] = useState('')
    const [transfer_id, Settransfer_id] = useState('')
    const [pin, Setpin] = useState('')
    const [amount, Setamount] = useState('')

    const transaction_data = (e) => {
        e.preventDefault()

        const d=new Date()
        let text=d.toISOString()

        user_data({ payment_id, pin, amount, transfer_id,text })
        Setpayment_id('')
        Settransfer_id('')
        Setpin('')
        Setamount('')
    }

    return (
        <div>
            <div className="transaction">
                <h1>Pay to:</h1>
                <form className=' form-input '>
                    <p className='transaction-id'>
                        <p>
                            <label >User ID:</label>
                            <input type="text" placeholder='username@gmail.com' onChange={(e) => { Setpayment_id(e.target.value) }} />
                        </p>
                        <p>
                            <label>Transfer ID: </label>
                            <input type="text" placeholder='transferId@gmail.com' onChange={(e) => { Settransfer_id(e.target.value) }} />
                        </p>  
                    </p>
                    <p className='transaction-id'>
                        <p>
                            <label >Amount:</label>
                            <input type="number" placeholder='Transfer Amount' onChange={(e) => { Setamount(e.target.value) }} />
                        </p>
                        <p>
                            <label >Pin:</label>
                            <input type="password" name="" id="" placeholder='Pin' onChange={(e) => { Setpin(e.target.value) }} />
                        </p>
                    </p>
                    <p>
                        <input type="submit" onClick={transaction_data} value='Submit' />
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Transaction
