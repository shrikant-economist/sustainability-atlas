// import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./Router', () => () => <div data-testid="app-router">AppRouter</div>);

test('renders Suspense component', () => {
  render(<App />);
  const suspenseElement = screen.getByTestId('app-router');
  expect(suspenseElement).toBeInTheDocument();
});

test('renders CircularProgress fallback', () => {
  render(<App />);
  const circularProgressElement = screen.getByRole('progressbar');
  expect(circularProgressElement).toBeInTheDocument();
});

test('renders AppRouter component', () => {
  render(<App />);
  const appRouterElement = screen.getByTestId('app-router');
  expect(appRouterElement).toBeInTheDocument();
});