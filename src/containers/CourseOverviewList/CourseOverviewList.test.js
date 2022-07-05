import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CourseOverviewList from "./CourseOverviewList";


it('renders on the page', () => {
    render(<CourseOverviewList />)
    const list = screen.getByTestId("course-overview-list");
    expect(list).toBeInTheDocument();
})