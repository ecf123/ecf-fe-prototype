import { render, screen } from "@testing-library/react";
import MarketplaceCard from "./MarketplaceCard";
import marketplaceImage from "../../assets/images/adidas-gift-voucher.svg";

describe("basic tests for card component", () => {
  it("Should render the card", () => {
    render(
      <MarketplaceCard
        img={marketplaceImage}
        title="gift voucher"
        trophies={100}
        score={100}
        imgTitle="gift voucher"
        isLocked={true}
      />
    );
    const div = screen.getByTestId("marketplace-card");
    expect(div).toBeInTheDocument();
  });

  it("should render the image", () => {
    render(
      <MarketplaceCard
        img={marketplaceImage}
        title="gift voucher"
        trophies={100}
        score={100}
        imgTitle="gift voucher"
        isLocked={true}
      />
    );
    const img = screen.getByTestId("marketplace-card-img");
    expect(img).toBeInTheDocument();
  });

  it("should render lock when isLocked]", () => {
    render(
      <MarketplaceCard
        img={marketplaceImage}
        title="gift voucher"
        trophies={100}
        score={100}
        imgTitle="gift voucher"
        isLocked={true}
      />
    );
    const lock = screen.getByTestId("marketplace-card-lock");
    expect(lock).toBeInTheDocument();
  });
});