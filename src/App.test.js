import { render, screen } from '@testing-library/react';
import App from './App';

test("Existe card em Courses/index?", () => {
  render(<App />);
  const linkElement = screen.getByText("Courses Crud");
  expect(linkElement).toBeInTheDocument();
});

test("Existe botão Novo em Courses/index?", () => {
  render(<App />);
  const linkElement = screen.getByText("Novo");
  expect(linkElement).toBeInTheDocument();
});

test("Existe tabela em Courses/index?", () => {
  render(<App />);
  const tableElement = screen.getByRole("table");
  expect(tableElement).toHaveClass("table");
});

test("Existe botão Editar em Courses/index?", () => {
  render(<App />);
  const buttonElement = screen.getByText("Editar");
  expect(buttonElement).toHaveClass("btn-outline-info");
});

test("Existe botão Excluir em Courses/index?", () => {
  render(<App />);
  const buttonElement = screen.getByText("Excluir");
  expect(buttonElement).toHaveClass("btn-outline-danger");
});




