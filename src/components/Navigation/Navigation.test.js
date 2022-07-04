import { screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import userEvent from "@testing-library/user-event";
import Navigation from "./Navigation";

describe("initial render test", () => {

    it("should render the navigation on the page", () => {
        customRender(<Navigation />)
        const navigation = screen.getByTestId("navigation");
        expect(navigation).toBeInTheDocument()
    })

    it("should render the icons in the navigation", () => {
        customRender(<Navigation />)
        const icons = screen.getAllByRole("img");
        icons.forEach(icon => {
            expect(icon).toBeInTheDocument();
        })
    })

    it("NavLink should Change classes when clicked", () => {
        customRender(<Navigation />)
        const home = screen.getByTestId("home-icon")
        const resources = screen.getByTestId("resources-icon")
        const branches = screen.getByTestId("branches-icon")
        const profile = screen.getByTestId("profile-icon")

        userEvent.click(home)
        expect(home).toHaveClass("nav-bar__link-active")

        userEvent.click(resources)
        expect(resources).toHaveClass("nav-bar__link-active")

        userEvent.click(branches)
        expect(branches).toHaveClass("nav-bar__link-active")

        userEvent.click(profile)
        expect(profile).toHaveClass("nav-bar__link-active")
    })
})