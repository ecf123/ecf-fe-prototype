import { screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import CourseOverview from "./CourseOverview";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ courseId: "" , pathwayId : ""}),
}));

jest.mock("firebase/firestore", () => ({
  ...jest.requireActual("firebase/firestore"),
  doc: () => null,
  getDoc: () =>
    Promise.resolve({
      exists: () => true,
      data: () => ({
        id: "",
        title: "play",
        description:
          "Lorem ipsum dolor sit amet. Ea nisi accusamus 33 Quis quidem ut quia obcaecati ex modi dolore 33 suscipit labore. Ut aliquid molestias aut voluptate incidunt nam assumenda quis et iste vero sit dolor dicta At iusto sunt suscipit nulla.",
        additionalInfo: "",
        image:
          "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ffinancial-forest.svg?alt=media&token=714631e7-333b-479d-a054-0f3f2d421b15",
        lessons: [
          { id: "", type: "video", title: "The Role of Banking and the Financial System", duration: "15 minutes" },
          { id: "", type: "video", title: "Currency Risk Management", duration: "10 minutes" },
          { id: "", type: "video", title: "Equity, Assets & Liabilities", duration: "15 minutes" },
        ],
        challenges: [
          {
            id: "",
            type: "assignment",
            title: "Multiple Choice Quiz",
            duration: "15 minutes",
          },
          { type: "assignment", title: "Module Assignment", duration: "1 hrs" },
        ],
      }),
    }),
}));

describe("initial tests for course overview list container", () => {
  it("Should render correct links", async () => {
    customRender(<CourseOverview />);
    const links = await screen.findAllByTestId("menu-bar-link");
    expect(links[0]).toHaveTextContent("Lessons");
    expect(links[1]).toHaveTextContent("Challenges");
    expect(links[2]).toHaveTextContent("Additional Info");
    expect(links).not.toBeNull();
    links.forEach(link => {
      expect(link).not.toBeNull();
    });
  });

  it("Should render correct title", async () => {
    customRender(<CourseOverview />);
    const heading = await screen.findByTestId("course-overview-heading");
    expect(heading).toBeInTheDocument();
    expect(heading).not.toBeNull();
  });

  it("Should render back button", async () => {
    customRender(<CourseOverview />);
    const backBtn = await screen.findByTestId("back-button");
    expect(backBtn).toBeInTheDocument();
    expect(backBtn).not.toBeNull();
  });

  it("Should render an overview image", async () => {
    customRender(<CourseOverview />);
    const overviewImage = await screen.findByTestId("overview-image");
    expect(overviewImage).toBeInTheDocument();
    expect(overviewImage).not.toBeNull();
  });

  it("Should render the sub-heading", async () => {
    customRender(<CourseOverview />);
    const subHeading = await screen.findByTestId("sub-heading");
    expect(subHeading).toBeInTheDocument();
    expect(subHeading).not.toBeNull();
  });

  it("Should render the paragraph text", async () => {
    customRender(<CourseOverview />);
    const paragraph = await screen.findByTestId("paragraph-text");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).not.toBeNull();
  });
});
