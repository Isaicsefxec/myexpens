import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://udemydatabase-516c9-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
}
