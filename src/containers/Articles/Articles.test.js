import { screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import Articles from "./Articles";
import userProfile from "../../assets/data/dummyUserData";
import articleInfo from "../../assets/data/dummyArticleCardInformation";

describe("initial rendering tests for Articles page", () => {
  it("should render the trophy header component", () => {
    customRender(<Articles userProfile={userProfile} articleInfo={articleInfo} />);

    const trophyContainer = screen.getByTestId("trophy-stats");
    const profileImage = screen.getByAltText("user");

    expect(profileImage).toBeInTheDocument();
    expect(trophyContainer).toBeInTheDocument();
  });

  it("should render the search bar component", () => {
    customRender(<Articles userProfile={userProfile} articleInfo={articleInfo} />);
    const searchBar = screen.getByPlaceholderText("Search for articles");
    expect(searchBar).toBeInTheDocument();
  });

  it("should render all filter tags", () => {
    customRender(<Articles userProfile={userProfile} articleInfo={articleInfo} />);
    const financeFilter = screen.getByTestId("filtertag-finance")
    const allFilter = screen.getByTestId("filtertag-all")
    const businessFilter = screen.getByTestId("filtertag-business")
    const designFilter = screen.getByTestId("filtertag-design")
    const digitalMarketingFilter = screen.getByTestId("filtertag-digital marketing")
    const engineeringFilter = screen.getByTestId("filtertag-engineering")
    const programmingFilter = screen.getByTestId("filtertag-programming")

    expect(financeFilter).toBeInTheDocument();
    expect(financeFilter).not.toBeNull();
    expect(allFilter).toBeInTheDocument();
    expect(allFilter).not.toBeNull();
    expect(businessFilter).toBeInTheDocument();
    expect(businessFilter).not.toBeNull();
    expect(designFilter).toBeInTheDocument();
    expect(designFilter).not.toBeNull();
    expect(digitalMarketingFilter).toBeInTheDocument();
    expect(digitalMarketingFilter).not.toBeNull();
    expect(engineeringFilter).toBeInTheDocument();
    expect(engineeringFilter).not.toBeNull();
    expect(programmingFilter).toBeInTheDocument();
    expect(programmingFilter).not.toBeNull();
  });

  it("should render a list of article cards", () => {
    customRender(<Articles userProfile={userProfile} articleInfo={articleInfo} />);
    const articleCards = screen.getAllByTestId("article-card-component");
    articleCards.forEach(article => expect(article).toBeInTheDocument()); 
  });

  it("should render the navigation component", () => {
    customRender(<Articles userProfile={userProfile} articleInfo={articleInfo} />);
    const navigation = screen.getByTestId("navigation");
    expect(navigation).toBeInTheDocument();
  });
});