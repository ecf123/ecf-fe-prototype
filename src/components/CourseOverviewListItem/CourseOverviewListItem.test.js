import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CourseOverview from "../../containers/CourseOverview/CourseOverview";

it('renders on the page', () => {
    render(<CourseOverview />)

    const list = screen.getByTestId("course-overview-list");

    expect(list).toBeInTheDocument();
})