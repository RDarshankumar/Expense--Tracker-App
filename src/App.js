import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('expenses'));
    if (saved) setExpenses(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { id: Date.now(), ...expense }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const updateExpense = (updated) => {
    setExpenses(expenses.map((e) => (e.id === updated.id ? updated : e)));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
        Expense Tracker
      </Typography>
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <ExpenseForm onAdd={addExpense} />
      </Paper>
      <ExpenseList
        expenses={expenses}
        onDelete={deleteExpense}
        onUpdate={updateExpense}
      />
    </Container>
  );
};

export default App;
