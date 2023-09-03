import React from 'react'
import Transaction from './Transaction'

const OnlinePayment = ({ transactions, user_data }) => {

    const visibleTransactions = transactions.slice(0, 5);

    return (
        <div className="outer-container">
            <Transaction user_data={user_data} />
            { (transactions.length>=1) && <h2 className='text-display-transaction' >Past Transactions:</h2>}

            <div className=" past-transaction-container">

                <div className="past-transaction">
                    { (transactions.length>1) && visibleTransactions.map(transaction => (
                        <div key={transaction.id} className='transaction-details'>
                            <p>ID: <span >{transaction.name}</span></p>
                            <p>UPI ID: <span>{transaction.transactionId}</span></p>
                            <p>Transaction ID:<span>{transaction.id}</span></p>
                            <p>Amount: <span>{transaction.amount}</span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OnlinePayment
