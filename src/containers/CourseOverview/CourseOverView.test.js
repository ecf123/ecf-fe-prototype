import { screen, fireEvent } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import userEvent from "@testing-library/user-event";
import CourseOverview from "./CourseOverview";
import MenuBar from "../../components/MenuBar/MenuBar";
import CourseOverviewList from "../CourseOverviewList/CourseOverviewList";
import handleCategoryChange from "../../containers/CourseOverview/CourseOverview";

describe("test for the filter functionality", () => {
    it("Should change heading after uses click on a different category", () => {
        customRender(
            <CourseOverview>
                <MenuBar
                    data-testid="course-overview"
                    link1="Lessons"
                    link2="Challenges"
                    link3="Additional Info"
                    onClickLink={handleCategoryChange}
                />
                <CourseOverviewList title="Lessons" category="Lessons" />
            </CourseOverview>
        );

        const links = screen.getAllByTestId("menu-bar-link");

        const listHeading = screen.getByTestId("course-list-heading");
        // userEvent.click(links[1]);
        expect(listHeading).toHaveTextContent("Lessons");

        // userEvent.click(links[1]);

        expect(listHeading).toHaveTextContent("Challenges");

        expect(links.length).toBe(3);
        expect(links[0]).toHaveTextContent("Lessons");
        expect(links[1]).toHaveTextContent("Challenges");
        expect(links[2]).toHaveTextContent("Additional Info");
        expect(links).not.toBeNull();
        links.forEach((link) => {
            expect(link).not.toBeNull();
        });
    });
});