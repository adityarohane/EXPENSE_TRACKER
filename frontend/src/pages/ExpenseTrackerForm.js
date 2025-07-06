import React, { useState } from 'react'
import { handleError } from '../utils';

function ExpenseTrackerForm({addExpenses}) {
const [ExpenseInfo, setExpenseInfo] = useState({ text: '', amount: ''});
 const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyExpenseInfo = { ...ExpenseInfo };
        copyExpenseInfo[name] = value;
        setExpenseInfo(copyExpenseInfo);
    }

    const handleExpense = (e) => {
        e.preventDefault();
        console.log(ExpenseInfo);
        const { text, amount } = ExpenseInfo;
        if(!text || !amount) {
            handleError('All fields are required');
            return;
        }
        setTimeout(() => {
             setExpenseInfo({text:'', amount :''})
        }, 1000)
       addExpenses(ExpenseInfo);
    }
    return ( 
         <div className='container'>
                   <h1>Expense Tracker</h1>
                   <form onSubmit={handleExpense}>
                       <div>
                           <label htmlFor='email'>Expense Description</label>
                           <input
                               onChange={handleChange}
                               type='text'
                               name='text'
                               placeholder='Enter your Expense Description...'
                               value={ExpenseInfo.text}
                           />
                       </div>
                       <div>
                           <label htmlFor='amount'>Amount</label>
                           <input
                               onChange={handleChange}
                               type='number'
                               name='amount'
                               placeholder='Enter your Amount, Expense(-ve) Income (+ve)...'
                               value={ExpenseInfo.amount}
                           />
                       </div>
                       <button type='submit'>Add Expense</button>
                       
                   </form>
                
               </div>
    )
}
export default ExpenseTrackerForm