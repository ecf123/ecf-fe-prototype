import { customRender } from "../../test-utilities/test-utilities";
import { screen, render } from "@testing-library/react";
import ArticleHeaderIndex from "./ArticleIndexHeading"
import articleData from "../../assets/data/dummyArticles"
import { useParams, Routes, Route, Redirect, Router, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("initial tests for Article heading index", () => {
    it("should render the heading from the first article in dummy data", () => {
        const path = "/";
        const route = "/articles/1";
        const history = createMemoryHistory({ initialEntries: [route] });

        const toRender = (<MemoryRouter initialEntries={[route]}>
            <ArticleHeaderIndex articleArray={articleData}/>
        </MemoryRouter>)
        
        // (<Routes>
        //     <Route path="/" >
        //         <Redirect to="/articles/1" element={<ArticleHeaderIndex articleArray={articleData} />}></Redirect>
        //     </Route>
        // </Routes>)
        render(toRender);
        const title = screen.getByTestId("article-heading");
        expect(title).toBeInTheDocument();
        
    });
})
// const path = "/";
// const route = "/article/1";
// const history = createMemoryHistory({ initialEntries: [route] });

// const toRender = <Router history={history}>
//   <Route path={path} component={<element>} />
//   </Router>

// customRender(toRender)