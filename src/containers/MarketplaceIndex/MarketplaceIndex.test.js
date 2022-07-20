import { customRender } from "../../test-utilities/test-utilities";
import { screen } from "@testing-library/react";
import MarketplaceIndex from "./MarketplaceIndex";
import marketData from "../../assets/data/dummyMarketData";
import userProfile from "../../assets/data/dummyUserData";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ marketplaceId: 1 }),
}));

describe("Initial test for marketplace index heading data", () => {
  it("should render heading from first marketplace dummy data", () => {
    customRender(
      <MarketplaceIndex marketData={marketData} userProfile={userProfile} />
    );
    const heading = screen.getByTestId("heading");
    expect(heading).toBeInTheDocument();
    expect(heading.innerHTML).toEqual("Earn a £5 Amazon Voucher");
    expect(heading).not.toBeFalsy();
  });

  it("should render image from first marketplace dummy data", () => {
    customRender(
      <MarketplaceIndex marketData={marketData} userProfile={userProfile} />
    );
    const image = screen.getByTestId("image");
    expect(image).toBeInTheDocument();
    expect(image).not.toBeFalsy();
  });
});
