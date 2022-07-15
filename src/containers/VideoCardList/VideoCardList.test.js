import {screen} from "@testing-library/react";
import {customRender} from "../../test-utilities/test-utilities";
import dummyVideoData from "../../assets/data/dummyVideoCardData";
import VideoCardList from "./VideoCardList";

describe("basic tests for card  list component", () => {
  it("Should render the icon image on card list", () => {
    customRender(<VideoCardList dummyVideoData={dummyVideoData} id={1} />);
    const icon = screen.getByRole("img");
    expect(icon).toBeInTheDocument();
    expect(icon).not.toBeNull();
  });
});
