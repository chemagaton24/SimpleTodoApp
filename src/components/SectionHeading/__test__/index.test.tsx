import { render, screen } from "@testing-library/react";
import SectionHeading from "..";

describe("SectionHeading", () => {
  it("Should have same text as title props", () => {
    render(<SectionHeading title="Todo App" />);
    const linkElement = screen.getByText(/Todo App/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("Should have heading element", () => {
    render(<SectionHeading title="Todo App" />);
    const linkElement = screen.getByRole("heading");
    expect(linkElement).toBeInTheDocument();
  });
});
