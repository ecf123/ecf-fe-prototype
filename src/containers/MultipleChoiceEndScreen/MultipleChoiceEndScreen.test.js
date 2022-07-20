import { screen, render } from "@testing-library/react";
import { customRender } from "./../../test-utilities/test-utilities";
import MuLtipleChoiceEndScreen from "../../containers/MultipleChoiceEndScreen/MultipleChoiceEndScreen";

describe("Tests to check if rendered", () => {
  it("should render the title", () => {
    customRender(<MuLtipleChoiceEndScreen />);
    const title = screen.getByTestId("end-screen-title");
    expect(title).toBeInTheDocument();
  });

  it("should render the congratulations message", () => {
    customRender(<MuLtipleChoiceEndScreen />);
    const message = screen.getByTestId("end-screen-message");
    expect(message).toBeInTheDocument();
  });

  it("should render the podium image", () => {
    customRender(<MuLtipleChoiceEndScreen />);
    const podium = screen.getByTestId("end-screen-podium");
    expect(podium).toBeInTheDocument();
  });

  it("should render the retake button", () => {
    customRender(<MuLtipleChoiceEndScreen />);
    const retakeButton = screen.getByTestId("end-screen-button-retake");
    expect(retakeButton).toBeInTheDocument();
  });
});
