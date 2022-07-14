import { render, screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import PathwaysMenu from "./PathwaysMenu"

describe("initial tests for pathways menu container", () => {
    it("Should render correct components", () => {
        customRender(<PathwaysMenu />);

        const header = screen.getByTestId("pathways-menu-header");
        const heading = screen.getByTestId("pathways-menu-heading");
        const filters = screen.getByTestId("pathways-menu-filters");
        const list = screen.getByTestId("pathways-menu-list");
        const navbar = screen.getByTestId("pathways-menu-navbar");

        expect(header).toBeInTheDocument();
        expect(heading).toBeInTheDocument();
        expect(filters).toBeInTheDocument();
        expect(list).toBeInTheDocument();
        expect(navbar).toBeInTheDocument();
    });
});