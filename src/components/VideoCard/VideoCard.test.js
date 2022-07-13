import {render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import dummyVideoData from "../../assets/data/dummyVideoCardData";
import VideoCard from "./VideoCard";
import { act } from "react-dom/test-utils";
import { wait } from "@testing-library/user-event/dist/utils";
import { customRender } from "../../test-utilities/test-utilities";

describe("basic tests for card component", () => {
it("Should render the card list", () => {
    customRender(<VideoCard dummyVideoData={dummyVideoData} id={1} />);
    
    const videoCard = screen.getByTestId("video-card");
    
    
    expect(videoCard).toBeInTheDocument();
  });
})