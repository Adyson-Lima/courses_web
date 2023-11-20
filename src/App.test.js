import { render, screen } from '@testing-library/react';
import App from './App';

test("Existe card em App.js?", () => {
  render(<App />);
  const linkElement = screen.getByText(/Courses Crud/i);
  expect(linkElement).toBeInTheDocument();
});




