import { screen } from "@testing-library/react";

import { customRender } from "../../test-utilities/test-utilities";
import Routing from "./Routing";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import {BrowserRouter} from 'react-router-dom';

test('full app rendering/navigating', async () => {
    customRender(<App />, {wrapper: BrowserRouter})
    const user = userEvent.setup()
    expect(screen.getByText(/create an account/i)).toBeInTheDocument()
    // await user.click

}

)