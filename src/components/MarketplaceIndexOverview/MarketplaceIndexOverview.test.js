import { customRender } from "../../test-utilities/test-utilities";
import { screen } from "@testing-library/react";
import MarketplaceIndexOverview from "./MarketplaceIndexOverview";
import marketData from "../../assets/data/dummyMarketData";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ marketplaceId: 1 }),
}));

describe("Initial test for marketplace overview data", () => {
  it("should render info from first marketplace card overview", () => {
    customRender(<MarketplaceIndexOverview marketData={marketData} />);
    const overview = screen.getByTestId("overview");
    expect(overview).toBeInTheDocument();
    expect(overview).not.toBeFalsy();
  });
});
