import { screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import SaveButton from "./SaveButton";

describe("when pressed...", () => {
  it("should have the right class names when pressed", () => {
    const onClick = jest.fn();
    customRender(
      <SaveButton handleSaveButtonPress={onClick} isPressed={true} />
    );
    const saveImage = screen.queryByTestId("save-button-image");
    expect(saveImage).toHaveClass("save-button save-button--active");
  });
  it("should have the right class names when not pressed", () => {
    const onClick = jest.fn();
    customRender(
      <SaveButton handleSaveButtonPress={onClick} isPressed={false} />
    );
    const saveImage = screen.queryByTestId("save-button-image");
    expect(saveImage).toHaveClass("save-button");
  });
});
