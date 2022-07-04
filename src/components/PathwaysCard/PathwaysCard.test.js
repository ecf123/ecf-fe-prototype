import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PathwaysCard from "./PathwaysCard";

describe("basic tests for card component", () => {
  it("Should render the card", () => {
    const card = {header: "Financial Forest", topics: "Banking, Investments"};

    render(<PathwaysCard card={card} />);
    const div = screen.getByTestId("pathwaycard");
    expect(div).toBeInTheDocument();
  });

  it("should render the progress bar", () => {
    const card = {header: "Financial Forest", topics: "Banking, Investments"};

    render(<PathwaysCard card={card} />);
    const div = screen.getByTestId("circularprogressbar");
    expect(div).toBeInTheDocument();
  });

  it("should render the image", () => {
    const card = {header: "Financial Forest", topics: "Banking, Investments"};

    render(<PathwaysCard card={card} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});

describe("Changing to overlay view", () => {
  it("Should render the card", () => {
    const card = {header: "Financial Forest", topics: "Banking, Investments"};

    render(<PathwaysCard card={card} />);
    const div = screen.getByTestId("pathwaycard");
    userEvent.click(div);
    const overlay = screen.getByTestId("overlay");
    expect(overlay).toBeInTheDocument();
  });
});
