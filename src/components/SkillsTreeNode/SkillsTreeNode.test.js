import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {customRender} from "./../../test-utilities/test-utilities"
import SkillsTreeNode from "./SkillsTreeNode";
import santander from "./../../assets/images/santander.svg"


describe("Tests to check SkillsTreeNode", () => {
  it("should show a lock instead of the image if locked", () => {
    render(
        <SkillsTreeNode image={santander} title="test" id="id" locked={true} />
    );
    const lock = screen.getByTestId("lock");
    expect(lock).toBeInTheDocument();
  }); 

  it("should show image when not locked", () => {
    render(
        <SkillsTreeNode image={santander} title="test" id="id" locked={false} />
    );
    const image = screen.getByTestId("image")
    expect(image).toBeInTheDocument();
  });
});
