import { customRender } from "../../test-utilities/test-utilities";
import { screen } from "@testing-library/react";
import MarketplaceIndexRequirements from "./MarketplaceIndexRequirements";
import marketData from "../../assets/data/dummyMarketData";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ marketplaceId: 1 }),
}));

describe("initial test to get determine skill points and trophies required to gain rewards ", () => {
  it("should display skill points required ", () => {
    customRender(<MarketplaceIndexRequirements marketData={marketData} />);
    const points = screen.getByTestId("skillPoints");
    expect(points).toBeInTheDocument();
  });
  it("should display amount of trophies required", () => {
    customRender(<MarketplaceIndexRequirements marketData={marketData} />);
    const trophies = screen.getByTestId("trophies");
    expect(trophies).toBeInTheDocument();
  });
});
