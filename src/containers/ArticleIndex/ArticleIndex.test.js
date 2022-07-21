import { screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import ArticleIndex from "./ArticleIndex";
import articleInfo from "../../assets/data/dummyArticleCardInformation";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({ articleId: 1 }),
}));

describe("initial render tests", () => {
    it("should render the navigation on the page", () => {
        customRender(<ArticleIndex articleArray={articleInfo} />);
        const navigation = screen.getByTestId("navigation");
        expect(navigation).toBeInTheDocument();
    });

    it("should render the article image on the page", () => {
        customRender(<ArticleIndex articleArray={articleInfo} />);
        const image = screen.getByTestId("image");
        expect(image).toBeInTheDocument();
    });

    it("should render the article content on the page", () => {
        customRender(<ArticleIndex articleArray={articleInfo} />);
        const articleContent = screen.getAllByTestId("articleContent");
        articleContent.forEach((paragraph) =>
            expect(paragraph).toBeInTheDocument()
        );
    });

    it("should render the save button on the page", () => {
        customRender(<ArticleIndex articleArray={articleInfo} />);
        const saveButton = screen.getByTestId("save-button-image");
        expect(saveButton).toBeInTheDocument();
    });

    it("should render the back button on the page", () => {
        customRender(<ArticleIndex articleArray={articleInfo} />);
        const backButton = screen.getByTestId("back-button");
        expect(backButton).toBeInTheDocument();
    });
});
