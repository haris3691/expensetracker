import React, {useContext,useState} from 'react';
import './App.css';
import {transactionContext} from './TransactionContext';

function Child() {
    let {transactions, addTransaction} = useContext(transactionContext)
let [newDesc, setDesc] =useState("");
let [newAmount , setAmount] = useState(0);

    const handleAddition = (event) =>{
        event.preventDefault();
         addTransaction({
            amount:newAmount,
            desc:newDesc
        })
        
    }
    const getIncome = () => {
        let income=0;
        for(var i=0; i <transactions.lenght;i++)
        {
            if(transactions[i].amount > 0)
            income = income + transactions[i].amount
        }
        return income;
    }
const getExpense = () =>{
    let expense =0;
    for(var i=0; i<transactions.lenght;i++)
    {
        if(transactions[i].amount < 0)
        expense= expense +transactions[i].amount
    }
    return expense;
}

return (
    <div className="container">
    <h1 className="text-center">Expense Tracker</h1>
    
    <h3>YOURBALANCE< br />$260</h3>
    
    <div className="expense-container">
    <h3>INCOME< br /> {getIncome()}</h3>
    <h3>EXPENSE< br />  {getExpense()}</h3>
    </div>
    
    <h3>History</h3>
    <hr />
    <ul className="transaction-list"> 
    {
        transactions.map((transObj,ind) => {
        return ( <li>
            <span>{transObj.desc}</span>
            <span>{transObj.amount}</span>
        </li>
        )
    })}
        
    </ul>


    <h3>Add new transaction</h3>
    <hr />
    
<form className="transaction-form" onSubmit={handleAddition}>
    <label>
        Enter Description <br />
        <input type="text" onChange={(ev)=>setDesc(ev.target.value)}  required/>
    </label>
    <br />
    <label>
        Enter Amount <br />
        <input type="number" onChange={(ev)=>setAmount(ev.target.value)} required/>
    </label>
<br />

<input type="submit" value="Add Transaction"/>


</form>

    </div>


  );
}

export default Child;
