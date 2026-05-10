import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders blog title", () => {
  render(<App />);

  const heading = screen.getByText(/Nathan's Tech Blog/i);

  expect(heading).toBeInTheDocument();
});

test("renders article titles", () => {
  render(<App />);

  const article = screen.getByText(/Getting Started with React/i);

  expect(article).toBeInTheDocument();
});