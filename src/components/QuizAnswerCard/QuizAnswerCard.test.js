import {render, screen} from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import QuizAnswerCard from "./QuizAnswerCard";

describe("basic tests for card component", () => {
    it("Should render the card", () => {  
    customRender(
      <QuizAnswerCard 
      quizId={1}
        choice="A"
        answer="Blue"
        index="1"
        />
    );
    const div = screen.getByTestId("answer-card");
    expect(div).toBeInTheDocument();
  });
   it("Should render the card heading", () => {  
    customRender(
      <QuizAnswerCard 
      quizId={1}
        choice="A"
        answer="Blue"
        index="1"
        />
    );
    const heading = screen.getByTestId("heading");
    expect(heading).toHaveTextContent("A")
  });
  it("Should render the paragraph", () => {  
    customRender(
      <QuizAnswerCard 
      quizId={1}
        choice="A"
        answer="Blue"
        index="1"
        />
    );
    const paragraph = screen.getByTestId("paragraph");
    expect(paragraph).toHaveTextContent("Blue")
  });
});