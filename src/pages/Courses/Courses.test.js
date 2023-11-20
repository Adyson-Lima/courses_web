import { render, screen} from "@testing-library/react";
import Courses from "./index";

test("Existe card em Courses.js?", () => {
  render(<Courses />);
  const linkElement = screen.getByText(/Courses Crud/i);
  expect(linkElement).toBeInTheDocument();
});

test("Existe botão novo em Courses.js?", () => {
  render(<Courses />);
  const linkElement = screen.getByText(/Novo/i);
  expect(linkElement).toBeInTheDocument();
});
