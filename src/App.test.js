import { render, screen } from '@testing-library/react';
import App from './App';

test("Existe card em Courses/index?", () => {
  render(<App />);
  const linkElement = screen.getByText(/Courses Crud/i);
  expect(linkElement).toBeInTheDocument();
});

test("Existe botão novo em Courses/index?", () => {
  render(<App />);
  const linkElement = screen.getByText(/Novo/i);
  expect(linkElement).toBeInTheDocument();
});

test("Existe tabela em Courses/index?", () => {
  render(<App />);
  const tableElement = screen.getByRole("table");
  expect(tableElement).toHaveClass("table");
});

test("Existe botão Editar em Courses/index?", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveClass("btn");
});




