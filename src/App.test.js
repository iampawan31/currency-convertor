import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders currency convertor text", () => {
  render(<App />);
  const initialText = screen.getByText(/Currency Convertor/i);
  expect(initialText).toBeInTheDocument();
});
