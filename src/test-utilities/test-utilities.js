import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Ui = component to be tested
// 
export const customRender = (ui, useRouting = true) => {
  // wrap components in routing if requested
  const uiResult = useRouting && wrapWithRouting(ui);

  // use RTL's render function to return the test component
  return render(uiResult);
};

const wrapWithRouting = (ui) => {
  return <Router>{ui}</Router>;
};