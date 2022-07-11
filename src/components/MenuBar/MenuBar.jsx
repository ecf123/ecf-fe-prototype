import { React, useState } from "react";
import "./MenuBar.scss";

const MenuBar = ({ link1, link2, link3, onClickLink }) => {
    const [activeArray, setActiveArray] = useState([true, false, false]);

    const underline = (event) => {
        const idValue = event.target.id;
        if (idValue === "0") {
            setActiveArray([true, false, false]);
        } else if (idValue === "1") {
            setActiveArray([false, true, false]);
        } else if (idValue === "2") {
            setActiveArray([false, false, true]);
        }
    };

    return (
        <div data-testid="menu-bar" className="menu-bar">
            <span data-testid="menu-bar-onClickLink" onClick={onClickLink}>
                <span
                    data-testid="menu-bar-link"
                    id={0}
                    className={
                        activeArray[0]
                            ? "menu-bar__link active"
                            : "menu-bar__link"
                    }
                    onClick={underline}
                >
                    {link1}
                </span>
            </span>
            <span data-testid="menu-bar-onClickLink" onClick={onClickLink}>
                <span
                    data-testid="menu-bar-link"
                    id={1}
                    className={
                        activeArray[1]
                            ? "menu-bar__link active"
                            : "menu-bar__link"
                    }
                    onClick={underline}
                >
                    {link2}
                </span>
            </span>
            <span data-testid="menu-bar-onClickLink" onClick={onClickLink}>
                <span
                    data-testid="menu-bar-link"
                    id={2}
                    className={
                        activeArray[2]
                            ? "menu-bar__link active"
                            : "menu-bar__link"
                    }
                    onClick={underline}
                >
                    {link3}
                </span>
            </span>
        </div>
    );
};

export default MenuBar;
