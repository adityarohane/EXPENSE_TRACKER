const {  addExpenses, fetchExpenses , deleteExpenses } = require('../Controllers/ExpenseController');

const router = require('express').Router();

//fetch all the expenses of user based on user id
router.post('/' , addExpenses); 

router.get('/', fetchExpenses);
router.delete('/:expenseId',deleteExpenses);

module.exports = router;