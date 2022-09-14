import { screen } from "@testing-library/react";
import CourseOverviewList from "./CourseOverviewList";
import { customRender } from "../../test-utilities/test-utilities";
import challenges from "../../assets/data/dummyChallengeData";
import lessons from "../../assets/data/dummyLessonData";

describe("initial tests for course overview list container", () => {
  it("title renders on the page", () => {
    customRender(<CourseOverviewList title="Lesson" category="lesson" challenges={challenges} lessons={lessons} />);
    const title = screen.getByTestId("course-list-heading");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Lesson");
  });

  it("list renders on the page", () => {
    customRender(<CourseOverviewList title="Lesson" category="lesson" challenges={challenges} lessons={lessons} />);
    const title = screen.getByTestId("course-list-items");
    expect(title).toBeInTheDocument();
  });
});
