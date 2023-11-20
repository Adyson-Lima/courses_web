import { render, screen} from "@testing-library/react";
import Courses from "./Courses";

test("existe card em Courses.js", () => {
  render(<Courses />);
  const linkElement = screen.getByText(/Courses Crud/i);
  expect(linkElement).toBeInTheDocument();
})
