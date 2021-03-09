import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Users list" text', () => {
  render(<App />);
  const UsersList = screen.getByText(/Users list/i);
  expect(UsersList).toBeInTheDocument();
});
