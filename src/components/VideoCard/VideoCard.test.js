import {screen} from "@testing-library/react";
import dummyVideoData from "../../assets/data/dummyVideoCardData";
import VideoCard from "./VideoCard";
import {customRender} from "../../test-utilities/test-utilities";

describe("basic tests for card component", () => {
  it("Should render the card list", () => {
    customRender(<VideoCard dummyVideoData={dummyVideoData} id={1} />);
    const videoCard = screen.getByTestId("video-card");
    expect(videoCard).toBeInTheDocument();
  });
});
