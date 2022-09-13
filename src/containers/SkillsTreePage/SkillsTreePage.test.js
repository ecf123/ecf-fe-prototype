import { screen } from "@testing-library/react";
import { customRender } from "./../../test-utilities/test-utilities";
import userEvent from "@testing-library/user-event";
import SkillsTreePage from "../../containers/SkillsTreePage/SkillsTreePage";
import pathways from "../../assets/data/dummyPathwayData";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ pathwayId: "3cAtkFTtXJzdWTYLbZk3" }),
}));

describe("Tests to check if rendered", () => {
  it("should render the title", () => {
    customRender(<SkillsTreePage pathways={pathways} />);
    const title = screen.getByTestId("popup-title");
    expect(title).toBeInTheDocument();
  });

  it("should render the skills tree", () => {
    customRender(<SkillsTreePage pathways={pathways} />);
    const skillsTree = screen.getByTestId("skills-tree");
    expect(skillsTree).toBeInTheDocument();
  });
});

describe("Tests for popup when clicking on a course", () => {
  it("should appear on the page", () => {
    customRender(<SkillsTreePage pathways={pathways} />);
    const node = screen.getByTestId("node-zoYyatJhKNo18hy0XJcX");
    userEvent.click(node);
    const popup = screen.getByTestId("popup");
    const overlay = screen.getByTestId("popup-overlay");
    expect(popup).toBeInTheDocument();
    userEvent.click(overlay);
    expect(popup).not.toBeInTheDocument();
  });
});
