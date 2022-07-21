import { render, screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import LessonOverview from "./LessonOverview"
import userData from "../../assets/data/dummyUserData"
import lessonsData from "../../assets/data/dummyLessonOverview"

describe("initial tests for lesson overview container", () => {
    it("Should render correct components", () => {
      const lessonData= lessonsData[0];  
      customRender(<LessonOverview userProfile = {userData} lessonData= {lessonData}/>);

        const topButtons = screen.getByTestId("topButtons");
        const video = screen.getByTestId("video-card");
        const navbar = screen.getByTestId("navigation");
        const title = screen.getByTestId("title");

        expect(topButtons).toBeInTheDocument();
        expect(video).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(navbar).toBeInTheDocument();
    });
});