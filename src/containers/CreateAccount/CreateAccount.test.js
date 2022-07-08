import userEvent from "@testing-library/user-event";
import CreateAccount from "./CreateAccount";
import { waitFor, screen, render } from '@testing-library/react';
import { customRender } from "../../test-utilities/test-utilities";
import Splash from "../../containers/Splash/Splash";
import { Routes, Route, MemoryRouter, BrowserRouter } from "react-router-dom";

describe("should sign up a new user", () => {

    // it("should be possible to save user data", async () => {

    //     customRender(<CreateAccount />)

    //     const inputBox = screen.getAllByRole('textbox')[0];

    //     const response = await waitFor(() => {
    //         let headersList = {
    //             "Accept": "*/*",
    //             "Content-Type": "application/json"
    //            }
               
    //            let bodyContent = JSON.stringify({
    //              "email": "test@gmail.com",
    //              "password": "password",
    //              "returnSecureToken": true
    //            });
               
    //            return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDqFVYVthpIozXOTZXcLrt-nSzxJPfaZWY", { 
    //              method: "POST",
    //              body: bodyContent,
    //              headers: headersList
    //            }).then(function(response) {
    //              return response.json();
    //            }).then(data => data);
    //     })

    //     userEvent.type(inputBox, response.email);

    //     expect(inputBox).toBeInTheDocument();
    //     expect(screen.getByDisplayValue('test@gmail.com')).toBeInTheDocument();

    //     //Cleaning up by deleting test user for future tests

    //     await waitFor(() => {
    //         let headersList = {
    //             "Accept": "*/*",
    //             "Content-Type": "application/json"
    //            }
               
    //            let bodyContent = JSON.stringify({
    //              "idToken": response.idToken
    //            });
               
    //            return fetch("https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyDqFVYVthpIozXOTZXcLrt-nSzxJPfaZWY", { 
    //              method: "POST",
    //              body: bodyContent,
    //              headers: headersList
    //            });
    //     });
    // });

    it("should add a new user", async () => {
        render(
          <MemoryRouter initialEntries={["/create-account"]}>
            <Routes>
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/" element={<Splash />} />
            </Routes>
          </MemoryRouter>
        )

        // first screen
        const firstNameInput = screen.getByPlaceholderText("First Name");
        const lastNameInput = screen.getByPlaceholderText("Last Name");

        userEvent.type(firstNameInput, "Test");
        userEvent.type(lastNameInput, "McTest");
        userEvent.click(screen.getAllByRole("button")[1]);

        // second screen
        const emailInput = screen.getByPlaceholderText("you@example.com");
        const passwordInput = screen.getByPlaceholderText("Your password");
        const confirmPasswordInput = screen.getByPlaceholderText("Confirm Password");

        userEvent.type(emailInput, "test@gmail.com");
        userEvent.type(passwordInput, "password");
        userEvent.type(confirmPasswordInput, "password");

        userEvent.click(screen.getAllByRole("button")[1]);

        await waitFor(() => {
          const splashTitle = screen.getByText("Welcome to the Future Hub");
          expect(splashTitle).toBeInTheDocument();
        });

        //Cleaning up by deleting test user for future tests

        // await waitFor(() => {
        //   let headersList = {
        //     "Accept": "*/*",
        //     "Content-Type": "application/json"
        //   };
              
        //   let bodyContent = JSON.stringify({
        //     "idToken": response.idToken
        //   });
          
        //   return fetch("https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyDqFVYVthpIozXOTZXcLrt-nSzxJPfaZWY", { 
        //     method: "POST",
        //     body: bodyContent,
        //     headers: headersList
        //   });
        // });
    });

});