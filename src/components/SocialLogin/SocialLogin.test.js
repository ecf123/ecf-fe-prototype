import SocialLogin from "./SocialLogin";
import { render, screen } from "@testing-library/react";

describe("initial tests for social login button", () => {
    it("should render a button", () => {
        render(<SocialLogin />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument()
        expect(button).not.toBeNull()
    });
});