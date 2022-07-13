import { screen } from "@testing-library/react";
import {customRender} from "./../../test-utilities/test-utilities"
import userEvent from "@testing-library/user-event";
import PopUp from "../../components/PopUp/PopUp";

describe("Tests to check click functionality", () => {
    it("should open the course overview page when the button is clicked", () => {
        customRender(<PopUp title="test-title" description="test-description" link="/courses/0"/>);
        const button = screen.getByTestId("button");
        userEvent.click(button);
        const courseOverview = screen.getByTestId("course-overview");
        expect (courseOverview).toBeInTheDocument();
    })
})