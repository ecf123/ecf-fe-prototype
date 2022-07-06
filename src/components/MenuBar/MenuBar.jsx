import React from "react";
import "./MenuBar.scss";

const MenuBar = ({ link1, link2, link3, onClickLink }) => {
    const [activeArray, setActiveArray] = useState([true, false, false]);

    const underline = (event) => {
        
    };

    return (
        <div className="menu-bar">
            <span onClick={onClickLink}>
                <span className="menu-bar__link" onClick={underline}>
                    {link1}
                </span>
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
