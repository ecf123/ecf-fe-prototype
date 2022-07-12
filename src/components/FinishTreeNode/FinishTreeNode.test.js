import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FinishTreeNode from "./FinishTreeNode";
import {customRender} from "./../../test-utilities/test-utilities"

describe("Tests to check finishTreeNode", () => {
  it("should be locked if not finished", () => {
    render(<>
        <div id="parent"></div>
        <FinishTreeNode parentId="parent" finished={false}/>
        </>
    );
    const lock = screen.getByTestId("lock");
    expect(lock).toBeInTheDocument();
  });

  // it("should display images and heading", () => {
  //   render(
  //       <FinishTreeNode title="test" finished={true} parentId="parentTest" />
  //   );
  //   const podium = screen.getByTestId("podium");
  //   expect(podium).toBeInTheDocument();
  // });
});
