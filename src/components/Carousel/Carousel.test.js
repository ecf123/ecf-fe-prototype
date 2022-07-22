import {screen} from "@testing-library/react";
import {customRender} from "../../test-utilities/test-utilities";
import Carousel from "./Carousel";
import cardData from "../../assets/data/dummyPathwayData";

describe("testing functionality of carousel", () => {
  it("should render the carousel on the page", () => {
    customRender(<Carousel cardData={cardData} />);
    const carousel = screen.getByTestId("carousel");
    expect(carousel).toBeInTheDocument();
  });

  it("should render the carousel item on the page", () => {
    customRender(<Carousel cardData={cardData} />);
    const carouselItem = screen.getByTestId("carousel__item1");
    expect(carouselItem).toBeInTheDocument();
  });

  it("should render text based on props", () => {
    customRender(<Carousel cardData={[{header: "Financial Forest", topics: "Banking, Investments", image: null}]} />);
    const financialForestText = screen.getByText("Financial Forest");
    const topicsText = screen.getByText("Banking, Investments");
    expect(financialForestText).toBeInTheDocument();
    expect(topicsText).toBeInTheDocument();
  });
});
