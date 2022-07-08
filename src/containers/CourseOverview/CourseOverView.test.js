import { screen, fireEvent, renderHook } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import userEvent from "@testing-library/user-event";
import CourseOverview from "./CourseOverview";
import CourseOverviewList from "../CourseOverviewList/CourseOverviewList";
import MenuBar from "../../components/MenuBar/MenuBar";
import handleCategoryChange from "./CourseOverview";
import React from "react";


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
        const links = screen.getAllByTestId("menu-bar-onClinkLink"); 
        expect(links.length).toBe(3);
        expect(links[0]).toHaveTextContent("Lessons")
        expect(links[1]).toHaveTextContent("Challenges")
        expect(links[2]).toHaveTextContent("Additional Info")
        expect(links).not.toBeNull();
        links.forEach(link => {
            expect(link).not.toBeNull();
        })
    });
});
