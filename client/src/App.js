import React from 'react';

import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <h1 style={{textAlign:"center",color:"blue",fontWeight: "bold",fontSize:60}}>My Expense Tracker</h1>
          <text style={{textAlign:"center",}}>
            My expense tracker is a free money tracking tool where you can jot
            down all your cash inflows and outflows, that would help you run
            your business or personal life without the tension of over expenses.
          </text>
        
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
