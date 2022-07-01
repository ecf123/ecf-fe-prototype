import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";


// ui = Component that needs rendering
// 2nd parameter is not necessary does not need passing in , It has a default value. Can be overridden. 

// Call customerRender in your testing file instead of calling -> render() 


export const customRender = (ui, useRouting = true) => {
  // wrap components in routing if requested
  const uiResult = useRouting && wrapWithRouting(ui);

  // use RTL's render function to return the test component
  return render(uiResult);
};

const wrapWithRouting = (ui) => {
  return <Router>{ui}</Router>;
};