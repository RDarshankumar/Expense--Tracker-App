import React from 'react';
import {
  ListItem,
  ListItemText,
  IconButton,
  Paper,
  Stack
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const ExpenseItem = ({ expense, onDelete, onEdit }) => {
  return (
    <Paper sx={{ mb: 2, p: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <ListItemText
          primary={expense.title}
          secondary={`₹${expense.amount}`}
        />
        <Stack direction="row" spacing={1}>
          <IconButton onClick={() => onEdit(expense)}>
            <Edit />
          </IconButton>
          <IconButton onClick={() => onDelete(expense.id)}>
            <Delete />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ExpenseItem;
