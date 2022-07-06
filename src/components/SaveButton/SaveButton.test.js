import { screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import userEvent from "@testing-library/user-event";
import SaveButton from "./SaveButton";

describe("when pressed...", () => {
  it("should change classes when clicked", () => {
    customRender(<SaveButton />);
    const saveImage = screen.queryAllByTestId("save-button-image");
    const saveButton = screen.queryAllByTestId("save-button");

    saveButton.forEach((button) => {
      userEvent.click(button);
      saveImage.forEach((image) => {
        expect(image).toHaveClass("save-button--save save-button--active");
      });
    });
  });
});
