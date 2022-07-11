import { screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import ArticleCard from "./ArticleCard";

describe("Thumbnail testing", () => {
    it("should render the thumbnail on the page", () => {
        customRender(<ArticleCard />)
        const articleCardListImages = screen.queryAllByTestId("thumbnail")
        articleCardListImages.forEach(image => {
            expect(image).toBeInTheDocument()
        });
    })
    it("should have an Alt for the image", () => {
        customRender(<ArticleCard />)
        const articleCardListImagesAlt = screen.queryAllByTestId("thumbnail")
        articleCardListImagesAlt.forEach(alt => {
            expect(alt.alt).not.toBeNull()
        })
    })
})