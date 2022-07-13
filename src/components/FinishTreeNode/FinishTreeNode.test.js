import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FinishTreeNode from "./FinishTreeNode";
import {customRender} from "./../../test-utilities/test-utilities"


describe("Tests to check finishTreeNode", () => {
  it("should be locked if not finished", () => {
    render(<>
        <div id="parent"></div>
        <FinishTreeNode parentId="parent" finished={false} title="hi"/>
        </>
    );
    const lock = screen.getByTestId("lock");
    const overlay = screen.getByTestId("overlay");
    expect(lock).toBeInTheDocument();
    expect(overlay).toBeInTheDocument();
  });

  it("should ", () => {
    render(
        <FinishTreeNode title="test" finished={true} parentId="parentTest" />
    );
    const podium = screen.getByTestId("podium");
    const line = screen.getByTestId("line");
    const heading = screen.getByTestId("heading");
    const circle = screen.getByTestId("circle");

    expect(podium).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(line).toBeInTheDocument();
    expect(circle).toBeInTheDocument();
  });
});
