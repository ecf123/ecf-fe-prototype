import { render, screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import Challenge from "./Challenge";

describe("basic tests for Challenge component", () => {
  it("Should render the card", () => {
    customRender(<Challenge />);
    const div = screen.getByTestId("challenge");
    expect(div).toBeInTheDocument();
  });
  it("Should render the trophy icon", () => {
    customRender(<Challenge />);
    const div = screen.getByTestId("trophy");
    expect(div).toBeInTheDocument();
  });
  it("Should render the question container", () => {
    customRender(<Challenge />);
    const div = screen.getByTestId("question-container");
    expect(div).toBeInTheDocument();
  });
});
