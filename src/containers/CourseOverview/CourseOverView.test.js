import { screen, fireEvent } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import userEvent from "@testing-library/user-event";
import CourseOverview from "./CourseOverview"

describe("test for the filter functionality", () => {
    it("Should change heading after uses click on a different category", () => {
        customRender(<CourseOverview />);

        const links = screen.getAllByTestId("menu-bar-onClinkLink");
        
        // userEvent.click(links[1]);
        userEvent.click(links[1]);
        

        const listHeading = screen.getByTestId("course-list-heading");

        expect(listHeading).toHaveTextContent("Lessons")

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
