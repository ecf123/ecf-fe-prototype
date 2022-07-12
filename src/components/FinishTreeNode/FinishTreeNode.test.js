import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "react-dom";
import FinishTreeNode from "./FinishTreeNode";

describe("Tests to check finishTreeNode", () => {
  it("should be locked if not finished", () => {
    render(
      <>
        <div id="parentTest"></div>
        <FinishTreeNode title="test" finished={false} parentId="parentTest" />
      </>
    );
    const lock = screen.getByTestId("lock");
    expect(lock).toBeInTheDocument();
  });
});
