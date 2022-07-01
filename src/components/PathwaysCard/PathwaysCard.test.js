import {render, screen} from "@testing-library/react";
import PathwaysCard from "./PathwaysCard";

describe("basic tests for card component", () => {
  it("Should render the card", () => {
    const card = {header: "Financial Forest", topics: "Banking, Investments"};

    render(<PathwaysCard card={card} />);
    const div = screen.getByTestId("1");
    expect(div).toBeInTheDocument();
  });

  it("should render the progress bar", () => {
    const card = {header: "Financial Forest", topics: "Banking, Investments"};

    render(<PathwaysCard card={card} />);
    const div = screen.getByTestId("2");
    expect(div).toBeInTheDocument();
  });

  it("should render the image", () => {
    const card = {header: "Financial Forest", topics: "Banking, Investments"};

    render(<PathwaysCard card={card} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});
