import { screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import CourseOverview from "./CourseOverview";
import CourseOverviewList from "../CourseOverviewList/CourseOverviewList";
import MenuBar from "../../components/MenuBar/MenuBar";
import handleCategoryChange from "./CourseOverview";
import dummyPathwayData from "../../assets/data/dummyPathwayData";

describe("initial tests for course overview list container", () => {
    it("Should render correct links", () => {
        customRender(<CourseOverview >
            <CourseOverviewList>
                <MenuBar
            link1="Lessons"
            link2="Challenges"
            link3="Additional Info"
            onClickLink={handleCategoryChange}
        />
        </CourseOverviewList>
        </CourseOverview>);
        const links = screen.getAllByTestId("menu-bar-onClickLink");
        expect(links[0]).toHaveTextContent("Lessons")
        expect(links[1]).toHaveTextContent("Challenges")
        expect(links[2]).toHaveTextContent("Additional Info")
        expect(links).not.toBeNull();
        links.forEach(link => {
            expect(link).not.toBeNull();
        })
    });
    // it("Should render correct title", () => {
    //     customRender(<CourseOverview dummyPathwayData={dummyPathwayData}/>);
    //     const heading = screen.getByTestId("course-overview-heading")
    //     console.log(heading)
    //     expect(heading).toBeInTheDocument()
    //     expect(heading).not.toBeNull()
    // });
    // it("Should render correct title", () => {
    //     customRender(<CourseOverview dummyPathwayData={dummyPathwayData}/>);
    //     const header = screen.getByTestId("course-overview-header")
    //     console.log(header)
    //     expect(header).toBeInTheDocument()
    // });
});
