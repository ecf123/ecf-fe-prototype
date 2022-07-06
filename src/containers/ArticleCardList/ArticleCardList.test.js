import { screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import userEvent from "@testing-library/user-event";
import ArticleCardList from "./ArticleCardList";
import articleInfo from "../../assets/data/dummyArticleCardInformation";

describe ("initial render test", () => {
    it("should render the article cards on the page", () => {
        customRender(<ArticleCardList articleInfo={articleInfo}/>)
        const articleCardList = screen.getByTestId("article-card-component");
        expect(articleCardList).toBeInTheDocument();
    })
})