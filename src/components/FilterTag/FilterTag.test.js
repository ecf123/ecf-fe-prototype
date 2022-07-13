import { render, screen } from "@testing-library/react";
import FilterTag from "./FilterTag";

describe("basic tests for MenuBar component", () => {
    it("Should render the MenuBar component", () => {
        render(<FilterTag />);

        const tags = screen.getAllByTestId("filtertag-item");

        tags.forEach((tag) => {
            expect(tag).toBeInTheDocument();
            expect(tag).not.toBeNull();
        });

        expect(tags.length).toBe(7);
    });
});
