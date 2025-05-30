import React, { useState, useEffect } from 'react';
import { TextField, Button, Stack } from '@mui/material';

const ExpenseForm = ({ onAdd, editData = null, onUpdateDone }) => {
  const [form, setForm] = useState({ title: '', amount: '' });

  useEffect(() => {
    if (editData) {
      setForm({ title: editData.title, amount: editData.amount });
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount) return;

    if (editData) {
      onUpdateDone({ ...editData, ...form });
    } else {
      onAdd(form);
    }
    setForm({ title: '', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Amount"
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
          fullWidth
        />
        <Button variant="contained" type="submit">
          {editData ? 'Update' : 'Add'} Expense
        </Button>
      </Stack>
    </form>
  );
};

export default ExpenseForm;
