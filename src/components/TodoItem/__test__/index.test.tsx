import { render, screen } from "@testing-library/react";
import TodoItem from "..";

describe("TodoItem", () => {
  it("Should have same text as title props", () => {
    render(<TodoItem title="My Task" />);
    const linkElement = screen.getByText(/My Task/i);
    expect(linkElement).toBeInTheDocument();
  });
});
