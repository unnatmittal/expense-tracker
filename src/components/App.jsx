import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';
import { GlobalProvider } from '../context/GlobalState';


function App(){
    return (
        <GlobalProvider>
            <Header />
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