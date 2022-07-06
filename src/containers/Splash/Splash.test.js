import Splash from "./Splash";
import { render, screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";

describe("initial tests for splash page", () => {

    it("should render a total of 2 buttons on the page", () => {
        customRender(<Splash />);

        const buttons = screen.getAllByRole("button");
        let buttonCount = 0;
        buttons.forEach(button => {
            expect(button).toBeInTheDocument();
            buttonCount++;
        });

        expect(buttonCount).toEqual(2);
    });
});