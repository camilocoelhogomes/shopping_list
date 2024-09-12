"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingList: React.FC = () => {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const addItem = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setItems([...items, input]);
      setInput('');
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <Container maxWidth="sm">
      <h1>Shopping List</h1>
      <form onSubmit={addItem}>
        <TextField 
          label="Add a new item" 
          variant="outlined" 
          fullWidth 
          value={input} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} 
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
          Add
        </Button>
      </form>
      <List>
        {items.map((item, index) => (
          <ListItem key={index} secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => removeItem(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ShoppingList;