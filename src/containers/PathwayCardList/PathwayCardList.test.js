import { screen } from "@testing-library/react";
import PathwayCardList from "./PathwayCardList";
import { customRender } from "../../test-utilities/test-utilities";
import card from "../../assets/data/dummyPathwayData";

describe("initial tests for pathway overview list container", () => {
  it("list renders on the page", () => {
    customRender(<PathwayCardList />);
    const cards = screen.getAllByTestId("pathwaycard")
    cards.forEach(card => {
        expect(card).toBeInTheDocument();
    })
  });
});