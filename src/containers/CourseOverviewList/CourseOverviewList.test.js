import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CourseOverviewList from "./CourseOverviewList";
import { customRender } from "../../test-utilities/test-utilities";

describe("initial tests for course overview list container", () => {
  it("title renders on the page", () => {
    customRender(<CourseOverviewList />);
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
  });
});
