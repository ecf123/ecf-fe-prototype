import {screen} from "@testing-library/react";
import {customRender} from "../../test-utilities/test-utilities";
import CourseOverview from "./CourseOverview";
import CourseOverviewList from "../CourseOverviewList/CourseOverviewList";
import MenuBar from "../../components/MenuBar/MenuBar";
import handleCategoryChange from "./CourseOverview";
import dummyPathwayData from "../../assets/data/dummyPathwayData";

describe("initial tests for course overview list container", () => {
  it("Should render correct links", () => {
    customRender(
      <CourseOverview dummyPathwayData={dummyPathwayData}>
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
    customRender(<CourseOverview dummyPathwayData={dummyPathwayData} />);
    const heading = screen.getByTestId("course-overview-heading");
    expect(heading).toBeInTheDocument();
    expect(heading).not.toBeNull();
  });

  it("Should render back button", () => {
    customRender(<CourseOverview dummyPathwayData={dummyPathwayData} />);
    const backBtn = screen.getByTestId("back-button");
    expect(backBtn).toBeInTheDocument();
    expect(backBtn).not.toBeNull();
  });

  it("Should render video card", () => {
    customRender(<CourseOverview dummyPathwayData={dummyPathwayData} />);
    const videoCard = screen.getByTestId("video-card");
    expect(videoCard).toBeInTheDocument();
    expect(videoCard).not.toBeNull();
  });

  it("Should render the sub-heading", () => {
    customRender(<CourseOverview dummyPathwayData={dummyPathwayData} />);
    const subHeading = screen.getByTestId("sub-heading");
    expect(subHeading).toBeInTheDocument();
    expect(subHeading).not.toBeNull();
  });

  it("Should render the paragraph text", () => {
    customRender(<CourseOverview dummyPathwayData={dummyPathwayData} />);
    const paragraph = screen.getByTestId("paragraph-text");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).not.toBeNull();
  });
});
