import { React, useState } from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./PathwaysCard.scss";


const PathwaysCard = ({ card, percentage }) => {
    const { header, topics, image } = card;
    const [overlayActive, setOverlayActive] = useState(false);

    const handleClick = () => {
        setOverlayActive(true);
        console.log("Switched to overlay view");
    };

    const PathwayCardJSX = (
        <>
            <div
                className="card"
                data-testid="pathwaycard"
                onClick={handleClick}
            >
                <div
                    className="card__progress"
                    data-testid="circularprogressbar"
                >
                    <CircularProgressbar
                        className="card__progress-bar"
                        value={percentage}
                        text={percentage}
                        strokeWidth={10}
                        styles={buildStyles({
                            textColor: "#3b5165",
                            pathColor: "#b4ddc0",
                            trailColor: "#e9e9e9",
                            textSize: "22px",
                        })}
                    />
                </div>
                <div className="card__content">
                    <img
                        className="card__content-image"
                        src={image}
                        alt={header}
                    />
                    <h1 className="card__content-header">{header}</h1>
                    <h2 className="card__content-topics">{topics}</h2>
                </div>
            </div>
        </>
    );

    const PathwayOverlayJSX = (
        <>
            <div className="card" data-testid="overlay">
                Pathway overlay
            </div>
        </>
    );

    return (
        <>{overlayActive ? PathwayOverlayJSX : PathwayCardJSX}</>
        // <div className="card" data-testid="1" onClick={handleClick}>
        //   <NavLink to="/">
        //   <div className="card__progress" data-testid="2">
        //     <CircularProgressbar
        //       className="card__progress-bar"
        //       value={percentage}
        //       text={percentage}
        //       strokeWidth={10}
        //       styles={buildStyles({
        //         textColor: "#3b5165",
        //         pathColor: "#b4ddc0",
        //         trailColor: "#e9e9e9",
        //         textSize: "22px",
        //       })}
        //     />
        //   </div>
        //   <div className="card__content">
        //     <img className="card__content-image" src={image} alt="" />
        //     <h1 className="card__content-header">{header}</h1>
        //     <h2 className="card__content-topics">{topics}</h2>
        //   </div>
        //   </NavLink>
        // </div>
    );
};
export default PathwaysCard;
