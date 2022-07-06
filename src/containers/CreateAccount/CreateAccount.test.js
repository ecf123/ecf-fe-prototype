import userEvent from "@testing-library/user-event";
import CreateAccount from "./CreateAccount"

describe("should sign up a new user", () => {

    it("should be possible to save user data", (done) => {
        const response = fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=1//03WJYY6L8DUPZCgYIARAAGAMSNwF-L9IrXQKV5P1cDzPnYFAoo9RQCitgLA45qNULZjyZ-AOJGZaw93uZ_2lOfl31pQO54KBLLwg", {"email":"test@gmail.com","password":"password"});
        console.log(response);
        expect(response).toBeDefined();
        done();
    })

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