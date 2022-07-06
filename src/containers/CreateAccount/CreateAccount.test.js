import userEvent from "@testing-library/user-event";
import CreateAccount from "./CreateAccount";
import { render, waitFor, screen } from '@testing-library/react';
import { customRender } from "../../test-utilities/test-utilities";
import { type } from "@testing-library/user-event/dist/type";


describe("should sign up a new user", () => {

    // it("should be possible to save user data", (done) => {
    //     const response = fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=1//03WJYY6L8DUPZCgYIARAAGAMSNwF-L9IrXQKV5P1cDzPnYFAoo9RQCitgLA45qNULZjyZ-AOJGZaw93uZ_2lOfl31pQO54KBLLwg", {"email":"test@gmail.com","password":"password"});
    //     console.log(response);
    //     expect(response).toBeDefined();
    //     done();
    // })

    it("should be possible to save user data", async () => {

        customRender(<CreateAccount />)

        const inputBox = screen.getAllByRole('textbox')[0];

        const response = await waitFor(() => {
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
               }
               
               let bodyContent = JSON.stringify({
                 "email": "test@gmail.com",
                 "password": "password",
                 "returnSecureToken": true
               });
               
               return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDqFVYVthpIozXOTZXcLrt-nSzxJPfaZWY", { 
                 method: "POST",
                 body: bodyContent,
                 headers: headersList
               }).then(function(response) {
                 return response.json();
               }).then(data => data);
        })

        userEvent.type(inputBox, response.email);

        expect(inputBox).toBeInTheDocument();
        expect(screen.getByDisplayValue('test@gmail.com')).toBeInTheDocument();

        //Cleaning up by deleting test user for future tests

        await waitFor(() => {
            let headersList = {
                "Accept": "*/*",
                "Content-Type": "application/json"
               }
               
               let bodyContent = JSON.stringify({
                 "idToken": response.idToken
               });
               
               return fetch("https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyDqFVYVthpIozXOTZXcLrt-nSzxJPfaZWY", { 
                 method: "POST",
                 body: bodyContent,
                 headers: headersList
               });
        });
    });

    

    // it('checks the function submitTodo', (done) => {
    //     const submitTodo = jest.fn();
    //     const { getByTestId } = render(<InputField submitTodo={submitTodo} />);
    //     const input = getByTestId('input');
    //     fireEvent.change(input, { target: { value: 'test' } })
    
    //     expect.assertions(1);
    
    //     fireEvent.submit(getByTestId('submitBtn'))
    //     expect(submitTodo).toHaveBeenCalled()
    //     done();    
    // })

    // it("should add a new user", () => {
    //     customRender(<CreateAccount />);
    //     // first screen
    //     const nameBoxes = screen.getAllByRole("textbox");
    //     userEvent.click(nameBoxes[0]);
    //     userEvent.type("Test");
    //     userEvent.click(nameBoxes[1]);
    //     userEvent.type("McTest");
    //     const buttonOne = screen.getByRole("button");
    //     userEvent.click(buttonOne);
    //     // second screen
    //     const loginBoxes = screen.getAllByRole("textbox");
    //     userEvent.click(loginBoxes[0]);
    //     userEvent.type("test@gmail.com");
    //     userEvent.click(loginBoxes[1]);
    //     userEvent.type("password");
    //     userEvent.click(loginBoxes[2]);
    //     userEvent.type("password");
    //     const buttonTwo = screen.getByRole("button");
    //     userEvent.click(buttonTwo);
    // })
})
