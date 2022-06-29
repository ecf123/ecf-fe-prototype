import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("initial test for react button", () => {
    it("should render button", () => {
        render(<Button />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument()
        expect(button).not.toBeNull()
    } )
    it("should render a primary button", () => {
        render(<Button isSecondary={false}/>);
        const button = screen.getByRole("button");
        expect(button).not.toHaveClass("button--secondary")
        expect(button).toHaveClass("button")
        expect(button).not.toBeNull()
    } )
    it("should render a secondary button", () => {
        render(<Button isSecondary={true}/>);
        const button = screen.getByRole("button");
        expect(button).toHaveClass("button--secondary")
        expect(button).toHaveClass("button")
        expect(button).not.toBeNull()
    } )
    it("should render a button with the button text Sign In", () => {
        render(<Button buttonText={"Sign In"}/>);
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Sign In");
        expect(button).not.toHaveTextContent("Button Text");
        expect(button).not.toBeNull()
    } )
    it("should render a button with the button with a type", () => {
        render(<Button buttonType={"submit"}/>);
        const button = screen.getByRole("button");
        expect(button).toHaveAttribute("type");
        expect(button).not.toHaveAttribute("");
    
    } )
   
})
