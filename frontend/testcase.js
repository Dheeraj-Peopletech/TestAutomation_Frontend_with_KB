Based on the provided JavaScript code for the Login component and the test cases specified in the 'test_automation_frontend_kb' knowledge base, here are the 10 test cases corresponding to sections 5.1 through 5.10:

```javascript
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

// 5.1
test('renders login form with email and password inputs', () => {
  render(<Login />);
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
});

// 5.2
test('allows entering email and password', () => {
  render(<Login />);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  userEvent.type(emailInput, 'test@example.com');
  userEvent.type(passwordInput, 'password123');
  expect(emailInput).toHaveValue('test@example.com');
  expect(passwordInput).toHaveValue('password123');
});

// 5.3
test('displays error message when form is submitted with empty fields', () => {
  render(<Login />);
  const submitButton = screen.getByRole('button', { name: /login/i });
  fireEvent.click(submitButton);
  expect(screen.getByText('Please fill in all fields')).toBeInTheDocument();
});

// 5.4
test('clears form fields after successful submission', () => {
  render(<Login />);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /login/i });
  userEvent.type(emailInput, 'test@example.com');
  userEvent.type(passwordInput, 'password123');
  fireEvent.click(submitButton);
  expect(emailInput).toHaveValue('');
  expect(passwordInput).toHaveValue('');
});

// 5.5
test('removes error message after successful submission', () => {
  render(<Login />);
  const submitButton = screen.getByRole('button', { name: /login/i });
  fireEvent.click(submitButton);
  expect(screen.getByText('Please fill in all fields')).toBeInTheDocument();
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  userEvent.type(emailInput, 'test@example.com');
  userEvent.type(passwordInput, 'password123');
  fireEvent.click(submitButton);
  expect(screen.queryByText('Please fill in all fields')).not.toBeInTheDocument();
});

// 5.6
test('prevents default form submission', () => {
  const mockPreventDefault = jest.fn();
  render(<Login />);
  const form = screen.getByRole('form');
  fireEvent.submit(form, { preventDefault: mockPreventDefault });
  expect(mockPreventDefault).toHaveBeenCalled();
});

// 5.7
test('logs email and password to console on successful submission', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  render(<Login />);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /login/i });
  userEvent.type(emailInput, 'test@example.com');
  userEvent.type(passwordInput, 'password123');
  fireEvent.click(submitButton);
  expect(consoleSpy).toHaveBeenCalledWith('Email:', 'test@example.com', 'Password:', 'password123');
});

// 5.8
test('submits form with invalid email format', () => {
  render(<Login />);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /login/i });
  userEvent.type(emailInput, 'invalidemail');
  userEvent.type(passwordInput, 'password123');
  fireEvent.click(submitButton);
  expect(screen.getByText('Invalid email format')).toBeInTheDocument();
});

// 5.9
test('submits form with password less than 8 characters', () => {
  render(<Login />);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /login/i });
  userEvent.type(emailInput, 'test@example.com');
  userEvent.type(passwordInput, 'short');
  fireEvent.click(submitButton);
  expect(screen.getByText('Password must be at least 8 characters long')).toBeInTheDocument();
});

// 5.10
test('submits form with non-existing user credentials', () => {
  render(<Login />);
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: /login/i });
  userEvent.type(emailInput, 'nonexistent@example.com');
  userEvent.type(passwordInput, 'password123');
  fireEvent.click(submitButton);
  expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
});
```

These test cases cover the functionality specified in sections 5.1 through 5.10 of the 'test_automation_frontend_kb' knowledge base, focusing on the Login component's behavior and user interactions.