import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import dummyVideoData from "../../assets/data/dummyVideoCardData";
import VideoCardList from "./VideoCardList";
import { act } from "react-dom/test-utils";
import { customRender } from "../../test-utilities/test-utilities";


describe("basic tests for card  list component", () => {
  it("Should render the image on card list", () => {
    customRender(<VideoCardList dummyVideoData={dummyVideoData} id={1} />);
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).not.toBeNull();
  });
});
