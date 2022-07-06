import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CourseOverviewListItem from "./CourseOverviewListItem";
import { customRender } from "../../test-utilities/test-utilities";
import Redo from "../../assets/images/redo.svg";

describe("initial tests for course overview list item", () => {
  it("list item renders on the page", () => {
    customRender(
      <CourseOverviewListItem
        image={Redo}
        title="Lesson"
        duration="10 minutes"
        id={1}
        category="lesson"
      />
    );
    const listItem = screen.getByTestId("course-list-item");
    expect(listItem).toBeInTheDocument();
  });
  it("list item title renders on the page", () => {
    customRender(
      <CourseOverviewListItem
        image={Redo}
        title="Currency Risk Management"
        duration="10 minutes"
        id={1}
        category="lesson"
      />
    );
    const title = screen.getByTestId("course-list-title");
    expect(title).toHaveTextContent("Currency Risk Management");
    expect(title).not.toBeNull();
  });
  it("all list item image renders on the page", () => {
    customRender(
      <CourseOverviewListItem
        image={Redo}
        title="Currency Risk Management"
        duration="10 minutes"
        id={1}
        category="lesson"
      />
    );
    const images = screen.getAllByRole("img");
    images.forEach((img) => {
      expect(img).toBeInTheDocument();
      expect(img).not.toBeNull();
    });
  });

  it("all list item description renders on the page", () => {
    customRender(
      <CourseOverviewListItem
        image={Redo}
        title="Currency Risk Management"
        duration="10 minutes"
        id={1}
        category="lesson"
      />
    );
    const duration = screen.getByTestId("course-list-duration");

      expect(duration).toBeInTheDocument();
      expect(duration).not.toBeNull();
      expect(duration).toHaveTextContent("10 minutes");
  });
});
