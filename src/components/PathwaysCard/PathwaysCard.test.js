import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PathwaysCard from "./PathwaysCard";
import { customRender } from "../../test-utilities/test-utilities";

describe("basic tests for card component", () => {
  it("Should render the card", () => {
    const card = {id: 1, header: "Financial Forest", topics: "Banking, Investments"};

    customRender(<PathwaysCard card={card} />);
    const div = screen.getByTestId("pathwaycard");
    expect(div).toBeInTheDocument();
  });

  it("should render the progress bar", () => {
    const card = {header: "Financial Forest", topics: "Banking, Investments"};

    customRender(<PathwaysCard card={card} />);
    const div = screen.getByTestId("circularprogressbar");
    expect(div).toBeInTheDocument();
  });

  it("should render the image", () => {
    const card = {header: "Financial Forest", topics: "Banking, Investments"};

    customRender(<PathwaysCard card={card} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});
