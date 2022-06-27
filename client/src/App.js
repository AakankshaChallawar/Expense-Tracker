import React from 'react';

import Header from './components/Header';
import Balance from './components/Balance';
import IncomExpense from './components/IncomExpense';
import TransactionList from './components/TransactionList';
import AddTransactionList from './components/AddNewTransaction'
import { GlobalProvider } from './context/GlobalState';


import './App.css';

function App() {
  return (

      <GlobalProvider>
      <Header/>
      <div className='container'>
          <Balance/>
          <IncomExpense/>
          <TransactionList/>
          <AddTransactionList/>
      </div>
      </GlobalProvider>
  
  );
}

export default App;