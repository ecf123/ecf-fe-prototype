import { render, screen } from "@testing-library/react";
import MenuBar from "./MenuBar";
import handleCategoryChange from "../../containers/CourseOverview/CourseOverview"

describe("basic tests for MenuBar component", () => {
    it("Should render the MenuBar component", () => {
        render(<MenuBar
            link1="Lessons"
            link2="Challenges"
            link3="Additional Info"
            onClickLink={handleCategoryChange}
        />);
        const div = screen.getByTestId("menu-bar");
        expect(div).toBeInTheDocument();
        expect(div).not.toBeNull();
    });
    it("Should render the MenuBar component with given links", () => {
        render(<MenuBar
            link1="Lessons"
            link2="Challenges"
            link3="Additional Info"
            onClickLink={handleCategoryChange}
        />);

        const links = screen.getAllByTestId("menu-bar-link");

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
