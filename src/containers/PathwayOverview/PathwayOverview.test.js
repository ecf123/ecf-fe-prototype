import { screen } from "@testing-library/react";
import PathwayOverview from "./PathwayOverview";
import { customRender } from "../../test-utilities/test-utilities";
import card from "../../assets/data/dummyPathwayData";
import userProfile from "../../assets/data/dummyUserData"

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({ pathwayId: 1 }),
}));

describe("initial rendering tests", () => {
    it("should render the title on the page", () => {
        customRender(<PathwayOverview userProfile={userProfile} card={card} />);
        const header = screen.getByRole("heading")
        expect(header).toBeInTheDocument();
    })
    it("should render the image on the page", () => {
        customRender(<PathwayOverview userProfile={userProfile} card={card} />);
        const image = screen.getByTestId("main-image")
        expect(image).toBeInTheDocument();
    })
    it("should render given text in the content div", () => {
        customRender(<PathwayOverview userProfile={userProfile} card={card} />);
        const content = screen.getByTestId("main-content")
        expect(content).not.toBeNull();
    })
    it("should render the content div", () => {
        customRender(<PathwayOverview userProfile={userProfile} card={card} />);
        const content = screen.getByTestId("main-content")
        expect(content).toBeInTheDocument();
    })
})