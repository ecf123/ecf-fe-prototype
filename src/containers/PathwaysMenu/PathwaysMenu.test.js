import { screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import userEvent from "@testing-library/user-event";
import PathwaysMenu from "./PathwaysMenu";
import pathways from "../../assets/data/dummyPathwayData";

describe("initial tests for pathways menu container", () => {
  it("Should render correct components", () => {
    customRender(<PathwaysMenu pathways={pathways} />);

    const heading = screen.getByTestId("pathways-menu-heading");
    const filters = screen.getByTestId("pathways-menu-filters");
    const list = screen.getByTestId("pathways-menu-list");
    const navbar = screen.getByTestId("pathways-menu-navbar");

    expect(heading).toBeInTheDocument();
    expect(filters).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(navbar).toBeInTheDocument();
  });
});

describe("tests to check filter tags are working on cards", () => {
  it("should show all cards when the all filter is active", () => {
    customRender(<PathwaysMenu pathways={pathways} />);

    const allFilter = screen.getByTestId("filtertag-all");
    userEvent.click(allFilter);
    const list = screen.getByTestId("pathways-menu-list");
    expect(list).toBeInTheDocument();
  });

  it("should show only the financial forest card when finance filter is active", () => {
    customRender(<PathwaysMenu pathways={pathways} />);

    const financeFilter = screen.getByTestId("filtertag-finance");
    userEvent.click(financeFilter);
    const financialForestCard = screen.getByText("Financial Forest");
    expect(financialForestCard).toBeInTheDocument();
  });

  it("should show only the business bonanza card when business filter is active", () => {
    customRender(<PathwaysMenu pathways={pathways} />);

    const businessFilter = screen.getByTestId("filtertag-business");
    userEvent.click(businessFilter);
    const businessBonanzaCard = screen.getByText("Business Bonanza");
    expect(businessBonanzaCard).toBeInTheDocument();
  });

  it("should show only the divine design card when design filter is active", () => {
    customRender(<PathwaysMenu pathways={pathways} />);

    const designFilter = screen.getByTestId("filtertag-design");
    userEvent.click(designFilter);
    const divineDesignCard = screen.getByText("Divine Design");
    expect(divineDesignCard).toBeInTheDocument();
  });

  it("should show only the magic marketing card when digital marketing filter is active", () => {
    customRender(<PathwaysMenu pathways={pathways} />);

    const digitalMarketingFilter = screen.getByTestId("filtertag-digital marketing");
    userEvent.click(digitalMarketingFilter);
    const magicMarketingCard = screen.getByText("Magic Marketing");
    expect(magicMarketingCard).toBeInTheDocument();
  });

  it("should show only the epic engineering card when engineering filter is active", () => {
    customRender(<PathwaysMenu pathways={pathways} />);

    const engineeringFilter = screen.getByTestId("filtertag-engineering");
    userEvent.click(engineeringFilter);
    const epicEngineeringCard = screen.getByText("Epic Engineering");
    expect(epicEngineeringCard).toBeInTheDocument();
  });

  it("should show only the Coding Camp card when programming filter is active", () => {
    customRender(<PathwaysMenu pathways={pathways} />);

    const programmingFilter = screen.getByTestId("filtertag-programming");
    userEvent.click(programmingFilter);
    const codingCampCard = screen.getByText("Coding Camp");
    expect(codingCampCard).toBeInTheDocument();
  });
});
