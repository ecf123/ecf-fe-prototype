import { render, screen } from "@testing-library/react";
import FilterTag from "./FilterTag";

describe("basic tests for MenuBar component", () => {
    it("Should render the MenuBar component", () => {
        render(<FilterTag />);

        const financeFilter = screen.getByTestId("filtertag-finance")
        const allFilter = screen.getByTestId("filtertag-all")
        const businessFilter = screen.getByTestId("filtertag-business")
        const designFilter = screen.getByTestId("filtertag-design")
        const digitalMarketingFilter = screen.getByTestId("filtertag-digital marketing")
        const engineeringFilter = screen.getByTestId("filtertag-engineering")
        const programmingFilter = screen.getByTestId("filtertag-programming")

        expect(financeFilter).toBeInTheDocument();
        expect(financeFilter).not.toBeNull();
        expect(allFilter).toBeInTheDocument();
        expect(allFilter).not.toBeNull();
        expect(businessFilter).toBeInTheDocument();
        expect(businessFilter).not.toBeNull();
        expect(designFilter).toBeInTheDocument();
        expect(designFilter).not.toBeNull();
        expect(digitalMarketingFilter).toBeInTheDocument();
        expect(digitalMarketingFilter).not.toBeNull();
        expect(engineeringFilter).toBeInTheDocument();
        expect(engineeringFilter).not.toBeNull();
        expect(programmingFilter).toBeInTheDocument();
        expect(programmingFilter).not.toBeNull();
    });
});
