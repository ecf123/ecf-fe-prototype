import { screen } from "@testing-library/react";
import CourseOverviewList from "./CourseOverviewList";
import { customRender } from "../../test-utilities/test-utilities";

describe("initial tests for course overview list container", () => {
  it("title renders on the page", () => {
    customRender(<CourseOverviewList category="Lesson" />);
    const title = screen.getByTestId("course-list-heading");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Lesson")
  });

  it("list renders on the page", () => {
    customRender(<CourseOverviewList category="Lesson" />);
    const title = screen.getByTestId("course-list-items");
    expect(title).toBeInTheDocument();
  });
});