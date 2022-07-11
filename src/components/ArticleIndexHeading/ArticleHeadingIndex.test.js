import { customRender } from "../../test-utilities/test-utilities";
import { screen } from "@testing-library/react";
import ArticleHeaderIndex from "./ArticleIndexHeading";
import articleData from "../../assets/data/dummyArticles";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({ articleId: 1 }),
}));
  
describe("initial tests for Article heading index", () => {
    it("should render the heading from the first article in dummy data", () => {
        customRender(<ArticleHeaderIndex articleArray={articleData} />);
        const title = screen.getByTestId("article-heading");
        expect(title).toBeInTheDocument();
    });

    it("should render the date and read time from the first article in dummy data", () => {
        customRender(<ArticleHeaderIndex articleArray={articleData} />);
        const date = screen.getByTestId("article-date");
        const time = screen.getByTestId("article-time");

        expect(date).toBeInTheDocument();
        expect(time).toBeInTheDocument();
    });
});