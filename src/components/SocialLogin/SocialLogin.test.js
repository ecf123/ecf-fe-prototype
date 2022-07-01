import SocialLogin from "./SocialLogin";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("initial tests for social login button", () => {
    it("should render a button", () => {
        render(<SocialLogin />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument()
        expect(button).not.toBeNull()
    });

    it("should render text passed in the icon prop", () => {
        render(<SocialLogin icon="Test" />);
        const buttonText = screen.getByText("Test");
        expect(buttonText).toBeInTheDocument()
        expect(buttonText).not.toBeNull()
    });

    // Further tests can be added once Authorisation is implemented
});