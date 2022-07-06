import { screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import userEvent from "@testing-library/user-event";
import SaveButton from "./SaveButton";

describe("when pressed...", () => {
  it("should fire a function", () => {
    
    const onClick = jest.fn()
    
    customRender(<SaveButton handleSaveButtonPress={onClick} />);
    const saveImage = screen.queryByTestId("save-button-image");
    const saveButton = screen.queryByTestId("save-button");

 
      userEvent.click(saveButton);

      // expect(saveImage).toHaveClass("save-button--save save-button--active");
      expect(onClick).toBeCalledTimes(1)
  });
});
