import { screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import LessonOverview from "./LessonOverview";
import userData from "../../assets/data/dummyUserData";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ courseId: "", pathwayId: "" }),
}));

jest.mock("firebase/firestore", () => ({
  ...jest.requireActual("firebase/firestore"),
  doc: () => null,
  getDoc: () =>
    Promise.resolve({
      exists: () => true,
      data: () => ({
        id: "9jB1AoV6HZGUXLK1SJSP",
        title: "Currency Risk Management",
        video: {
          url: "https://vimeo.com/90283590",
        },
        bullets: [
          "Id est ut ut fermentum nunc, a. Porttitor luctus pretium et enim metus eget.",
          "Leo diam nibh cras ac nibh laoreet arcu donec. Quis diam tempus risus vitae orci, ultricies elementum, sed.",
          "Egestas convallis faucibus at adipiscing turpis tincidunt facilisi massa, amet. Massa at ac quis orci. Morbi nisi, sit in lobortis.",
        ],
        contents: [
          {
            title: "Introduction",
            text: "Etiam dolor augue ut nam amet. Dignissim in tempor phasellus duis duis adipiscing. Convallis interdum neque tortor aliquet. Posuere adipiscing aliquet tempus cursus turpis a nisi. Diam tristique fames nibh volutpat sapien hendrerit sapien vitae, ornare. Dui sed felis, tortor euismod. Bibendum volutpat et consectetur diam cras. Imperdiet turpis nunc, lectus ornare massa. Vitae risus aliquet arcu sit libero viverra consectetur. Massa amet duis ut gravida consectetur. Auctor interdum mauris, etiam purus auctor est mauris neque tincidunt. Vestibulum est porta vestibulum turpis nulla felis.",
          },
          {
            title: "Content",
            text: "Etiam dolor augue ut nam amet. Dignissim in tempor phasellus duis duis adipiscing. Convallis interdum neque tortor aliquet. Posuere adipiscing aliquet tempus cursus turpis a nisi. Diam tristique fames nibh volutpat sapien hendrerit sapien vitae, ornare. Dui sed felis, tortor euismod. Bibendum volutpat et consectetur diam cras. Imperdiet turpis nunc, lectus ornare massa. Vitae risus aliquet arcu sit libero viverra consectetur. Massa amet duis ut gravida consectetur. Auctor interdum mauris, etiam purus auctor est mauris neque tincidunt. Vestibulum est porta vestibulum turpis nulla felis.",
          },
        ],
      }),
    }),
}));

describe("initial tests for lesson overview container", () => {
  it("Should render correct components", async () => {
    customRender(<LessonOverview userProfile={userData} />);

    const topButtons = await screen.findByTestId("topButtons");
    const video = await screen.findByTestId("video-card");
    const navbar = await screen.findByTestId("navigation");
    const title = await screen.findByTestId("title");

    expect(topButtons).toBeInTheDocument();
    expect(video).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(navbar).toBeInTheDocument();
  });
});
