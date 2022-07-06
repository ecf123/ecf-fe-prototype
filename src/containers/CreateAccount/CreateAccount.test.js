import userEvent from "@testing-library/user-event";
import CreateAccount from "./CreateAccount";
import { waitFor, screen, render } from '@testing-library/react';
import { customRender } from "../../test-utilities/test-utilities";
import Splash from "../../containers/Splash/Splash";
import { Routes, Route } from "react-router-dom"

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

    it("should add a new user", () => {
        customRender(
              <Routes>
                <Route path="/" element={<CreateAccount />} />
                <Route path="/home" element={<Splash />} />
              </Routes>
          );

          userEvent.click(screen.getByText("CREATE AN ACCOUNT"))

        // first screen
        userEvent.type(screen.getByPlaceholderText("First Name"), "Test");
        userEvent.type(screen.getByPlaceholderText("Last Name"), "McTest");
        userEvent.click(screen.getByText("NEXT"));

        // second screen
        userEvent.type(screen.getByPlaceholderText("you@example.com"), "test@gmail.com");
        userEvent.type(screen.getByPlaceholderText("Your password"), "password");
        userEvent.type(screen.getByPlaceholderText("Confirm Password"), "password");

        userEvent.click(screen.getByText("CREATE ACCOUNT"));

        expect(screen.getByText("Ellie Laken")).toBeInTheDocument(); 
    })
})
