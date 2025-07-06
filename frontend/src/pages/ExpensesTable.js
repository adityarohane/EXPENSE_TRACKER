import React from 'react';

function ExpensesTable({ expenses, handleDeleteExpense }) {
  console.log('ExpensesTable -->', expenses);

  return (
    <div className='expenses-list'>
      {expenses?.map((expense, index) => (
        <div key={index} className='expense-item'>
          <button 
            className='delete-button' 
            onClick={() => handleDeleteExpense(expense._id)}
          >
            x
          </button>
          <div className='expenses-description'>{expense.text}</div>
          <div 
            className='expense-amount'
            style={{
              color: expense.amount > 0 ? '#27ae60' : '#e74c3c'
            }}
          >
            ₹{expense.amount}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExpensesTable;
