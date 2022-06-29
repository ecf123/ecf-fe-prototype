import InputField from "./InputField";
import { render, screen } from "@testing-library/react";

describe("initial tests for ECF client project input field component", () => {
  it("should render the form on the page", () => {
    render(<InputField label="label" />);

    const input = screen.getByRole("textbox");
    const label = screen.getByText("label");

    expect(input).toBeInTheDocument;
    expect(label).toBeInTheDocument;
  });
});
