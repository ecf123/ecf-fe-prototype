import {screen} from "@testing-library/react";
import {customRender} from "../../test-utilities/test-utilities";
import CourseOverview from "./CourseOverview";
import CourseOverviewList from "../CourseOverviewList/CourseOverviewList";
import MenuBar from "../../components/MenuBar/MenuBar";
import handleCategoryChange from "./CourseOverview";
import dummyPathwayData from "../../assets/data/dummyPathwayData";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ courseId: 1 }),
}));

describe("initial tests for course overview list container", () => {
  it("Should render correct links", () => {
    customRender(
      <CourseOverview pathwayData={dummyPathwayData}>
        <CourseOverviewList>
          <MenuBar link1="Lessons" link2="Challenges" link3="Additional Info" onClickLink={handleCategoryChange} />
        </CourseOverviewList>
      </CourseOverview>
    );
    const links = screen.getAllByTestId("menu-bar-link");
    expect(links[0]).toHaveTextContent("Lessons");
    expect(links[1]).toHaveTextContent("Challenges");
    expect(links[2]).toHaveTextContent("Additional Info");
    expect(links).not.toBeNull();
    links.forEach((link) => {
      expect(link).not.toBeNull();
    });
  });

  it("Should render correct title", () => {
    customRender(<CourseOverview pathwayData={dummyPathwayData} />);
    const heading = screen.getByTestId("course-overview-heading");
    expect(heading).toBeInTheDocument();
    expect(heading).not.toBeNull();
  });

  it("Should render back button", () => {
    customRender(<CourseOverview pathwayData={dummyPathwayData} />);
    const backBtn = screen.getByTestId("back-button");
    expect(backBtn).toBeInTheDocument();
    expect(backBtn).not.toBeNull();
  });

  it("Should render an overview image", () => {
    customRender(<CourseOverview dummyPathwayData={dummyPathwayData} />);
    const overviewImage = screen.getByTestId("overview-image");
    expect(overviewImage).toBeInTheDocument();
    expect(overviewImage).not.toBeNull();
  });

  it("Should render the sub-heading", () => {
    customRender(<CourseOverview pathwayData={dummyPathwayData} />);
    const subHeading = screen.getByTestId("sub-heading");
    expect(subHeading).toBeInTheDocument();
    expect(subHeading).not.toBeNull();
  });

  it("Should render the paragraph text", () => {
    customRender(<CourseOverview pathwayData={dummyPathwayData} />);
    const paragraph = screen.getByTestId("paragraph-text");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).not.toBeNull();
  });
});
