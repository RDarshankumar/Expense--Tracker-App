import React, { useState } from 'react';
import { List, Typography, Paper } from '@mui/material';
import ExpenseItem from './ExpenseItem';
import ExpenseForm from './ExpenseForm';

const ExpenseList = ({ expenses, onDelete, onUpdate }) => {
  const [editId, setEditId] = useState(null);

  const handleEdit = (expense) => {
    setEditId(expense.id);
  };

  const handleUpdate = (updatedExpense) => {
    onUpdate(updatedExpense);
    setEditId(null);
  };

  return (
    <>
      {expenses.length === 0 ? (
        <Typography align="center" variant="body1">
          No expenses yet.
        </Typography>
      ) : (
        <List>
          {expenses.map((expense) =>
            editId === expense.id ? (
              <Paper key={expense.id} sx={{ mb: 2, p: 2 }}>
                <ExpenseForm
                  editData={expense}
                  onUpdateDone={handleUpdate}
                />
              </Paper>
            ) : (
              <ExpenseItem
                key={expense.id}
                expense={expense}
                onDelete={onDelete}
                onEdit={handleEdit}
              />
            )
          )}
        </List>
      )}
    </>
  );
};

export default ExpenseList;
