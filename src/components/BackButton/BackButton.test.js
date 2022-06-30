import { render, screen } from "@testing-library/react";
import BackButton from "./BackButton";

describe("initial test for back button", () => {
    it("should render button", () => {
        render(<BackButton />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument()
        expect(button).not.toBeNull()
    });
})
