import ContentHeader from "./ContentHeader";
import { render, screen } from "@testing-library/react";

describe("initial tests for content header", () => {

    it("should render a heading and a link on the page", () => {
        render(<ContentHeader title="Test Title" />);
        const title = screen.getByText("Test Title");
        const link = screen.getByText("View All");
        expect(title).toBeInTheDocument();
        expect(link).toBeInTheDocument();
    });

    it("should render a heading passed through the title prop", () => {
        render(<ContentHeader title="Test Title" />);
        const title = screen.getByText("Test Title");
        expect(title).toBeInTheDocument();
    });
});