import userEvent from "@testing-library/user-event";
import CreateAccount from "./CreateAccount";
import { screen } from '@testing-library/react';
import { customRender } from "../../test-utilities/test-utilities";

describe("should sign up a new user", () => {

    it("should render 2 input boxes on load", () => {
        customRender(<CreateAccount />)

        // first screen
        const firstNameInput = screen.getByPlaceholderText("First Name");
        const lastNameInput = screen.getByPlaceholderText("Last Name");

        expect(firstNameInput).toBeInTheDocument();
        expect(lastNameInput).toBeInTheDocument();
    });

    it("should change what is displayed when the next button is clicked", () => {
      customRender(<CreateAccount />)

      // first screen
      const firstNameInput = screen.getByPlaceholderText("First Name");
      const lastNameInput = screen.getByPlaceholderText("Last Name");

      expect(firstNameInput).toBeInTheDocument();
      expect(lastNameInput).toBeInTheDocument();

      userEvent.type(firstNameInput, "Test");
      userEvent.type(lastNameInput, "Test");

      userEvent.click(screen.getAllByRole("button")[1]);

      // second screen
      const emailInput = screen.getByPlaceholderText("you@example.com");
      const passwordInput = screen.getByPlaceholderText("Your password");
      const confirmPasswordInput = screen.getByPlaceholderText("Confirm Password");

      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(confirmPasswordInput).toBeInTheDocument();
  });

  it("should not change page if input fields are empty", () => {
    customRender(<CreateAccount />)

    // first screen
    const firstNameInput = screen.getByPlaceholderText("First Name");
    const lastNameInput = screen.getByPlaceholderText("Last Name");

    userEvent.click(screen.getAllByRole("button")[1]);

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
  });

  it("should not submit account creation if input fields are empty", () => {
    customRender(<CreateAccount />)

    // first screen
    const firstNameInput = screen.getByPlaceholderText("First Name");
    const lastNameInput = screen.getByPlaceholderText("Last Name");

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();

    userEvent.type(firstNameInput, "Test");
    userEvent.type(lastNameInput, "Test");
    
    userEvent.click(screen.getAllByRole("button")[1]);

    const emailInput = screen.getByPlaceholderText("you@example.com");
    const passwordInput = screen.getByPlaceholderText("Your password");
    const confirmPasswordInput = screen.getByPlaceholderText("Confirm Password");

    userEvent.click(screen.getAllByRole("button")[1]);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
  });

  it("should change page when back button is clicked", () => {
    customRender(<CreateAccount user={{firstName: "Test", lastName: "Test"}} />)

    // first screen
    const firstNameInput = screen.getByPlaceholderText("First Name");
    const lastNameInput = screen.getByPlaceholderText("Last Name");

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();

    userEvent.type(firstNameInput, "Test");
    userEvent.type(lastNameInput, "Test");

    userEvent.click(screen.getAllByRole("button")[1]);
    userEvent.click(screen.getAllByRole("button")[0]);

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
  });
});