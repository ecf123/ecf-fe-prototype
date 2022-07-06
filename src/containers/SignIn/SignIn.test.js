import SignIn from "./SignIn";
import {  screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";

describe("initial tests for sign in page", () => {
    it("should customRender a heading passed through the welcomeMessage prop", () => {
        customRender(<SignIn welcomeMessage="Test Welcome Message" />);
        const welcomeMessage = screen.getByText("Test Welcome Message");
        expect(welcomeMessage).toBeInTheDocument();
    });

    it("should customRender a total of 5 buttons on the page", () => {
        customRender(<SignIn />);

        const backButton = screen.getAllByRole("button");
        let buttonCount = 0;
        backButton.forEach(button => {
            expect(button).toBeInTheDocument();
            buttonCount++;
        });

        expect(buttonCount).toEqual(5);
    });

    it("should customRender an email input field on the page", () => {
        customRender(<SignIn />);
        const emailInput = screen.getByPlaceholderText("you@example.com");
        expect(emailInput).toBeInTheDocument();
    });

    it("should customRender a password input field on the page", () => {
        customRender(<SignIn />);
        const passwordInput = screen.getByPlaceholderText("Your password");
        expect(passwordInput).toBeInTheDocument();
    });
});