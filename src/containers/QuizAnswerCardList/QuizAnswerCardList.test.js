import { render, screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import QuizAnswerCardList from "./QuizAnswerCardList";
import quiz from "../../assets/data/dummyQuizData";

describe("basic tests for card component", () => {
  it("Should render the card list", () => {
    customRender(<QuizAnswerCardList quizData={quiz} index={1} />);
    const div = screen.getByTestId("answer-list");
    expect(div).toBeInTheDocument();
  });
  it("Should render four cards", () => {
    customRender(<QuizAnswerCardList quizData={quiz} index={1} />);
    const cards = screen.getAllByTestId("answer-card");
    cards.forEach(card => {
        expect(card).toBeInTheDocument()
    });
  });
});
