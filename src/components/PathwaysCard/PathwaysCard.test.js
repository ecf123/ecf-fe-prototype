import {render, screen} from "@testing-library/react";
import PathwaysCard from "./PathwaysCard";

describe("basic tests for card component", () => {
  it("Should render the card", () => {
    const card = {header: "Financial Forest", topics: "Banking, Investments"};

    render(<PathwaysCard card={card} />);
    const div = screen.toHaveClass("card");
    expect(div).toBeInTheDocument();
  });

  // it("should render the progress bar", () => {
  //   const card = {header: "Financial Forest", topics: "Banking, Investments"};

  //   render(< PathwaysCard/>);
  // });
});
