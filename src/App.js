import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header';
import Layout from './Components/Layout';
import AccountLogin from './Components/AccountLogin';
import OnlinePayment from './Components/OnlinePayment';
import Loan from './Components/Loan';
import ShowUserDetails from './Components/ShowUserDetails'
import LoginSuccessful from './Components/LoginSuccessful';
import Login from './Components/Login';
import './App.css';

function App() {

    const [login, setLoggedIn] = useState(false)
    const [User, setUser] = useState('')

    const [data, setdata] = useState([
        {
            id: 1,
            name: 'Atharva Adam',
            email: 'atharvaadam@gmail.com',
            password: 'Atharva',
            account_balance: 12324573,
            pin: 1521,
            transactions: [
                {
                    id: 11,
                    name: "Atharva",
                    transactionId: 234324,
                    amount: 2344,
                    date: '2023-09-01T14:56:13.853Z'
                },
                {
                    id: 11,
                    name: "Atharva",
                    transactionId: 234324,
                    amount: 2344,
                    date: '2023-09-01T14:56:13.853Z'
                }
            ]
        },
        {
            id: 2,
            name: 'Kendall Roy',
            email: 'kendallroy@gmail.com',
            password: 'Kendall',
            account_balance: 12323,
            pin: 4545,
            transactions: [
                {
                    id: 11,
                    name: "Atharva",
                    transactionId: 234324,
                    amount: 2344,
                    date: '2023-09-01T14:56:13.853Z'
                },
                {
                    id: 14,
                    name: "Atharva",
                    transactionId: 234324,
                    amount: 408098,
                    date: '2023-09-01T14:56:13.853Z'
                }
            ]
        },
        {
            id: 3,
            name: 'a',
            email: 'a',
            password: 'a',
            account_balance: 12327873,
            pin: 1111,
            transactions: [
                {
                    id: 67,
                    name: 'Kendall Roy',
                    transactionId: 3151,
                    amount: 789,
                    date: '2023-09-01T14:56:13.853Z'
                },
                {
                    id: 677,
                    name: 'Kendall Roy',
                    transactionId: 3151,
                    amount: 789,
                    date: '2023-09-01T14:56:13.853Z'
                },
            ]
        }

    ]
    )

    const handleSignIn = (details) => {

        const existingDetails = data.find((user) => (user.email === details.email && user.password === details.password))

        if (existingDetails) {
            setUser(existingDetails)
            setLoggedIn(true)
        }
    }

    const handleSignUp = (details) => {

        if (details.name === '' || details.email === '' || details.password === '') {
            alert('Please fill all details')
        }
        const res = data.filter((user) => (user.email === details.email && user.password === details.password))

        const sameEmail = data.filter((user) => (user.email === details.email))

        // check already user exist or not
        if (res.length === 1) {
            alert('User already exist try Signing In')
        }

        // email already exist
        else if (sameEmail.length === 1) {
            alert('Please enter another Email, Email already taken')
        }

        else {
            const id = Math.floor(Math.random() * 1000) + 1;
            const pin = Math.floor(Math.random() * 10000) + 1;
            const account_balance = 0
            const transactions = []
            const newdata = { id, ...details, pin, account_balance, transactions }
            setdata([...data, newdata])
            console.log(data)
        }
    }

    const payment_gateway = (details) => {
        let sender = data.find((user) => user.email === details.payment_id && user.pin === parseFloat(details.pin));
        let receiver = data.find((user) => user.email === details.transfer_id);

        if (!receiver) {
            alert("Reciever User Not Found.")
            return;
        }
        if (!sender) {
            alert("Sender User Not Found.")
            return;
        }

        if (sender.account_balance === 0 || sender.account_balance - parseFloat(details.amount) < 0) {
            alert('Insufficient Balance')
            return
        }

        sender.account_balance -= parseFloat(details.amount);
        receiver.account_balance += parseFloat(details.amount);

        const id = Math.floor(Math.random() * 1000) + 1;
        const transactionId = Math.floor(Math.random() * 10000) + 1;
        const date = new Date()
        const jsonString = date.toJSON()

        const newRecieverTransaction = {
            id,
            name: receiver.name,
            transactionId: transactionId,
            amount: parseFloat(details.amount),
            date: jsonString,
        };

        const newSenderTransaction = {
            id,
            name: sender.name,
            transactionId: transactionId,
            amount: parseFloat(details.amount),
            date: jsonString
        };

        sender.transactions = sender.transactions || [];
        receiver.transactions = receiver.transactions || [];

        sender.transactions.push(newRecieverTransaction);
        receiver.transactions.push(newSenderTransaction);

        const updatedData = data.map((user) => {
            if (user.email === sender.email || user.email === receiver.email) {
                return user;
            } else {
                return { ...user };
            }
        });

        setdata(updatedData);
    };

    const LoanEligible = (details) => {
        const updatedData = data.map((user) => {
          if (user.email === details.userEmail) {
            let amount = parseFloat(user.account_balance);
            const loanAmount = parseFloat(details.loanAmount);
      
            // Loan eligible = account balance >= 50% loan amount for 6 months
            let loanAmountEligible = (0.5 * loanAmount) * 6;
      
            if (loanAmountEligible >= amount) {
              alert('Loan Rejected');
              return user; 
            }
      
            // Update the account balance
            amount = amount + loanAmount; 
      
            return { ...user, account_balance: amount };
          }
          return user; // Return unchanged user data for other users
        });
        setdata(updatedData);
    };

    const LoginStateChange=()=>{
        setLoggedIn(false)
    }
      

    return (
        <Router>
            <Header />
            <Layout>
                <Routes>
                    <Route exact path='/'
                        element={login ? <LoginSuccessful 
                            text="Login Successful"
                            LoginStateChange={LoginStateChange}
                            /> :
                            < AccountLogin
                                signUp={handleSignUp}
                                signIn={handleSignIn} />}>
                    </Route>

                    <Route exact path='/ShowUserDetails'
                        element={login ? <ShowUserDetails data={User} /> : <Login text='Please Login' />}
                    ></Route>

                    <Route exact path='/OnlinePayment'
                        element={login ?
                            < OnlinePayment
                                transactions={User.transactions}
                                user_data={payment_gateway}
                            /> :
                            <Login text='Please Login' /> } >
                    </Route>

                    <Route exact path='/Loan'
                        element={login ?
                            < Loan
                                loanDetails={LoanEligible}
                            />
                            : <Login text='Please Login' /> }>
                    </Route>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
