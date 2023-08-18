import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './Components/Header';
import Layout from './Components/Layout';
import AccountLogin from './Components/AccountLogin';
import TransactionDetails from './Components/TransactionDetails';
import Loan from './Components/Loan';
import './App.css';

function App() {

    const [login, isLoggedIn] = useState(false)

    return (
        <Router>
            <Header />
            <Layout>
                <Routes>
                    <Route exact path='/' element={!login && < AccountLogin  />}></Route>
                    <Route exact path='/TransactionDetails' element={!login ? (<h1>Please Login:</h1>) : < TransactionDetails />}></Route>
                    <Route exact path='/Loan' element={!login ? (<h1>Please Login:</h1>) : < Loan />}></Route>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
