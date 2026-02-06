import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import App from "./App.jsx";

describe("App", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.dataset.theme = "light";
  });

  it("renders the hero heading", () => {
    render(<App />);
    expect(
      screen.getByText(/Thoughtful product writing with production-ready publishing tools/i)
    ).toBeInTheDocument();
  });

  it("filters posts by tag", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Workflow" }));
    expect(screen.getByText("December 12, 2025")).toBeInTheDocument();
    expect(
      screen.queryByText(/Designing Tokenized Themes That Scale/i)
    ).not.toBeInTheDocument();
  });

  it("toggles theme and opens a different article", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /Theme:/i }));
    expect(document.documentElement.dataset.theme).toBe("dark");

    const articleButtons = screen.getAllByRole("button", { name: /Read article/i });
    await user.click(articleButtons[1]);

    expect(screen.getByText("January 9, 2026")).toBeInTheDocument();
  });
});
