import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders react app link', () => {
  render(<App />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/React App/i);
  expect(linkElement).toBeInTheDocument();
});
