import React from "react";
import "./MenuBar.scss";

const MenuBar = ({ link1, link2, link3, onClickLink }) => {
  return (
    <div className="menu-bar">
      <span className="menu-bar__link" onClick={onClickLink}>
        {link1}
      </span>
      <span className="menu-bar__link" onClick={onClickLink}>
        {link2}
      </span>
      <span className="menu-bar__link" onClick={onClickLink}>
        {link3}
      </span>
    </div>
  );
};

export default MenuBar;
