import SignIn from "./SignIn";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("initial tests for sign in page", () => {

    it("should render a heading passed through the welcomeMessage prop", () => {
        render(<SignIn welcomeMessage="Test Welcome Message" />);

        const welcomeMessage = screen.getByText("Test Welcome Message");

        expect(welcomeMessage).toBeInTheDocument();
    });

    it("should render a total of 5 buttons on the page", () => {
        render(<SignIn />);

        const backButton = screen.getAllByRole("button");
        let buttonCount = 0;

        backButton.forEach(button => {
            expect(button).toBeInTheDocument();
            buttonCount++;
        });

        expect(buttonCount).toEqual(5);
    });

    it("should render an email input field on the page", () => {
        render(<SignIn />);

        const emailInput = screen.getByPlaceholderText("you@example.com");

        expect(emailInput).toBeInTheDocument();
    });

    it("should render a password input field on the page", () => {
        render(<SignIn />);

        const passwordInput = screen.getByPlaceholderText("Your password");

        expect(passwordInput).toBeInTheDocument();
    });
  
});