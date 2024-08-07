import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/hello world/i);
  expect(buttonElement).toBeInTheDocument();
});
