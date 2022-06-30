import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import Navigation from "./Navigation";


    //whenever writing test follow the three A testing system
    // ARRANGE, ACT , ASSERT
    // ARRANGE - get everything we need to organize in order to be able to test
    // ACT - the process of getting all the elements/user events processed
    // ASSERT - this is where we make our expectations


describe("initial render test", () => {
      
    
    it("should render the icons in the navigation", () => {
        render(<Router><Navigation/></Router>);
        // const navigationImg = screen.getByRole("img")
        const icons = screen.getAllByRole("img");
        
        icons.forEach(icon => {
            expect(icon).toBeInTheDocument();
        })
    })
})