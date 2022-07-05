import { render, screen } from "@testing-library/react";
import TrophyHeader from "./TrophyHeader";
import userProfile from "../../assets/data/dummyUserData.js";

describe("initial test for react Trophy Header", () => {
  it("should render icon", () => {
    render(<TrophyHeader userProfile={userProfile}/>);
    const icon = screen.getByAltText("user");
    expect(icon).toBeInTheDocument();
    expect(icon).not.toBeNull();
  });
  it("should render trophy stats", () => {
    render(<TrophyHeader userProfile={userProfile}/>);
    const trophyStats = screen.getByTestId("trophy-stats")
    expect(trophyStats).toBeInTheDocument();
     expect(trophyStats).not.toBeNull();
  });
  it("should render trophy stats paragraph", () => {
    render(<TrophyHeader userProfile={userProfile}/>);
    const trophyStats = screen.getByTestId("trophy-stats-p")
    expect(trophyStats).toBeInTheDocument();
    expect(trophyStats).not.toBeNull();
  });
  it("should have a trophy score of 5", () => {
    render(<TrophyHeader userProfile={userProfile}/>);
    const trophyStats = screen.getByTestId("trophy-stats-p")
    expect(trophyStats).toHaveTextContent("5")
    expect(trophyStats).not.toBeNull();
  });
  it("should have skills points of 300", () => {
    render(<TrophyHeader userProfile={userProfile}/>);
    const trophyStats = screen.getByTestId("trophy-stats-s")
    expect(trophyStats).toHaveTextContent("300")
    expect(trophyStats).not.toBeNull();
  });
});
