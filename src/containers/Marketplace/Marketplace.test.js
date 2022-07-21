import { screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import Marketplace from "./Marketplace"
import userProfile from "../../assets/data/dummyUserData"
import marketData from "../../assets/data/dummyMarketData";

describe("testing marketplace page", () => {
    it("should render heading ", () => {
        customRender(<Marketplace userProfile={userProfile} marketData={marketData} />)
        const heading = screen.getByTestId("heading")
        expect(heading).toBeInTheDocument();
        expect(heading.innerHTML).toContain("Marketplace");
    })
})
