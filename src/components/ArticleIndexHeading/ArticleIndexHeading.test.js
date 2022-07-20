import { customRender } from "../../test-utilities/test-utilities";
import { screen } from "@testing-library/react";
import ArticleHeaderIndex from "./ArticleIndexHeading";
import articleInfo from "../../assets/data/dummyArticleCardInformation";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({ articleId: 1 })
}));

describe("initial tests for Article heading index", () => {
    it("should render the heading from the first article in dummy data", () => {
        customRender(<ArticleHeaderIndex articleArray={articleInfo} />);
        const title = screen.getByTestId("heading");
        expect(title).toBeInTheDocument();
    });

    it("should render the date and read time from the first article in dummy data", () => {
        customRender(<ArticleHeaderIndex articleArray={articleInfo} />);
        const date = screen.getByTestId("date");
        const time = screen.getByTestId("time");

        expect(date).toBeInTheDocument();
        expect(time).toBeInTheDocument();
    });
});