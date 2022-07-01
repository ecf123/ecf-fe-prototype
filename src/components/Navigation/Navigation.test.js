import { render, screen, wrapper } from "@testing-library/react";
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import { customRender } from "../../test-utilities/test-utilities.test";
import userEvent from "@testing-library/user-event";
import Navigation from "./Navigation";




    //whenever writing test follow the three A testing system
    // ARRANGE, ACT , ASSERT
    // ARRANGE - get everything we need to organize in order to be able to test
    // ACT - the process of getting all the elements/user events processed
    // ASSERT - this is where we make our expectations
    import {createMemoryHistory} from 'history';
describe("initial render test", () => {
      
    it("should render the navigation on the page", () => {
        customRender(<Navigation/>)
         const navigation = screen.getByTestId("navigation");
        expect(navigation).toBeInTheDocument()
      }) 
    
    it("should render the icons in the navigation", () => {
        customRender(<Navigation/>)
        const icons = screen.getAllByRole("img");
        icons.forEach(icon => {
            expect(icon).toBeInTheDocument();
        })
    })
    // it("should go to the correct page when clicked", () => {
    //     customRender(<Navigation/>, {wrapper: MemoryRouter})
    //         const libraryIcon = screen.getByTestId('library-icon')
    //      userEvent.click(libraryIcon)
    //     expect(screen.getByText(/Library/i)).toBeInTheDocument()
    // })


    it("should go to the correct page when clicked", () => {
            let history = createMemoryHistory();
            customRender(<Navigation/> ,history={history})
            userEvent.click(screen.getByText(/Pathway/));
            expect(history.location.pathname).toEqual('/Branches')
        
    })

    // test('NavLinks paths 1', () => {
    //     nav = wrapper.find('nav');
    //     NavLink = wrapper.find('NavLink')
    //     expect(wrapper.find('NavLink')).toHaveLength(4)
    //     const firstNavLink = wrapper.find('NavLink').first();
    //     expect(firstNavLink.prop('to')).toEqual('/calories');
    // })
    
})