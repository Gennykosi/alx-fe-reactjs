import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders the TodoList component with initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/add a new todo/i);
  const button = screen.getByText(/add todo/i);

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test('toggles a todo item', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
  fireEvent.click(todoItem);
  expect(todoItem).not.toHaveStyle('text-decoration: line-through');
});

test('deletes a todo item', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);
  const deleteButton = todoItem.nextSibling;

  fireEvent.click(deleteButton);
  expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});
