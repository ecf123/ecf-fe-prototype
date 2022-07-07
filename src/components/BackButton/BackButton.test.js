import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Splash from "../../containers/Splash/Splash";
import { customRender } from "../../test-utilities/test-utilities";
import BackButton from "./BackButton";

describe("initial test for back button", () => {
    it("should render button", () => {
        customRender(<BackButton linkTo="/"/>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument()
        expect(button).not.toBeNull()
    });

    // Hugo bug fix

    // it("should direct to a specified routing path when clicked", () => {
    //     customRender(<BackButton linkTo="/" />);
    //     customRender(<Splash path="/" />)

    //     const backButton = screen.getByRole("button");
    //     userEvent.click(backButton);
    //     const splashText = screen.getByText("Splash");

    //     expect(splashText).toBeInTheDocument();
    // });
});