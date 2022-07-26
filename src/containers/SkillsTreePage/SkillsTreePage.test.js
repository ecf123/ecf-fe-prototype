import { screen } from "@testing-library/react";
import { customRender } from "./../../test-utilities/test-utilities";
import userEvent from "@testing-library/user-event";
import SkillsTreePage from "../../containers/SkillsTreePage/SkillsTreePage";

describe("Tests to check if rendered", () => {
  it("should render the title", () => {
    customRender(<SkillsTreePage />);
    const title = screen.getByTestId("popup-title");
    expect(title).toBeInTheDocument();
  });

  it("should render the skills tree", () => {
    customRender(<SkillsTreePage />);
    const skillsTree = screen.getByTestId("skills-tree");
    expect(skillsTree).toBeInTheDocument();
  });
});

describe("Tests for popup when clicking on a course", () => {
  it("should appear on the page", () => {
    customRender(<SkillsTreePage />);
    const node = screen.getByTestId("node-santander");
    userEvent.click(node);
    const popup = screen.getByTestId("popup");
    const overlay = screen.getByTestId("popup-overlay");
    expect(popup).toBeInTheDocument();
    userEvent.click(overlay);
    expect(popup).not.toBeInTheDocument();
  });
});
