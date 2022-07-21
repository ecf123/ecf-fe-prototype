import { render, screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import MarketplaceCard from "./MarketplaceCard";
import marketplaceImage from "../../assets/images/adidas-gift-voucher.svg";
import marketData from "../../assets/data/dummyMarketData";
import thorpeParkVoucher from "../../assets/images/thorpe-park.svg"

describe("basic tests for card component", () => {
  const cardData ={
    image: thorpeParkVoucher,
    heading: "Get tickets to Thorpe Park for you and two others",
    overview:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa?",
    id: 3,
    skillPoints: 300,
    trophies: 2,
    isLocked: true
  }

  it("Should render the card", () => {  
    customRender(
      <MarketplaceCard
        cardData={cardData}
      />
    );
    const div = screen.getByTestId("marketplace-card");
    expect(div).toBeInTheDocument();
  });

  it("should render the image", () => {
    customRender(
      <MarketplaceCard
      cardData={cardData}
      />
    );
    const img = screen.getByTestId("marketplace-card-img");
    expect(img).toBeInTheDocument();
  });

  it("should render lock when isLocked", () => {
    customRender(
      <MarketplaceCard
      cardData={cardData}
      />
    );
    const lock = screen.getByTestId("marketplace-card-lock");
    expect(lock).toBeInTheDocument();
  });
});