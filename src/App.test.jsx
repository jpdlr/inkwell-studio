import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
  it("renders the hero heading", () => {
    render(<App />);
    expect(
      screen.getByText(/Designing calm, high-performing interfaces/i)
    ).toBeInTheDocument();
  });
});
