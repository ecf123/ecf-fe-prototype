import {screen} from "@testing-library/react";
import {customRender} from "../../test-utilities/test-utilities";
import Carousel from "./Carousel";

describe("testing functionality of carousel", () => {
  it("should render the carousel on the page", () => {
    customRender(<Carousel />);
    const carousel = screen.getByTestId("carousel");
    expect(carousel).toBeInTheDocument();
  });

  it("should render the carousel item on the page", () => {
    customRender(<Carousel />);
    const carouselItem = screen.getByTestId("carousel__item");
    expect(carouselItem).toBeInTheDocument();
  });
});
