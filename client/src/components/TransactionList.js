import React from 'react'
import { GlobalContext } from '../context/GlobalState';
import { useContext ,useEffect} from 'react';
import { Transaction } from './Transaction';

const TransactionList = () => {
  const {transactions, getTransactions}=useContext(GlobalContext);
  //console.log(context);
  useEffect(()=>{
    getTransactions();
  }, []);


  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction=>(<Transaction  key ={transaction.id} transaction = {transaction}/>))}
        
      </ul>
    </div>
  )
}

export default TransactionList
