import React, { useState } from "react";
import "./FilterTag.scss";
import performanceMoney from "../../assets/images/performance-money-icon.svg";
import handshake from "../../assets/images/handshake-icon.svg";
import paintingPalette from "../../assets/images/painting-palette-icon.svg";
import phoneWrite from "../../assets/images/phone-write-icon.svg";
import carActions from "../../assets/images/car-actions-icon.svg";
import fileCode from "../../assets/images/file-code-icon.svg";

const FilterTag = () => {
    const [activeArray, setActiveArray] = useState([
        true,
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    const handleSelected = (event) => {
      console.log(event);
        setActiveArray([false, false, false, false, false, false, false]);
        switch (event.target.id) {
            case "all":
                setActiveArray([
                    true,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                ]);
                break;
            case "finance":
                setActiveArray([
                    false,
                    true,
                    false,
                    false,
                    false,
                    false,
                    false,
                ]);
                break;
            case "business":
                setActiveArray([
                    false,
                    false,
                    true,
                    false,
                    false,
                    false,
                    false,
                ]);
                break;
            case "design":
                setActiveArray([
                    false,
                    false,
                    false,
                    true,
                    false,
                    false,
                    false,
                ]);
                break;
            case "digital-marketing":
                setActiveArray([
                    false,
                    false,
                    false,
                    false,
                    true,
                    false,
                    false,
                ]);
                break;
            case "engineering":
                setActiveArray([
                    false,
                    false,
                    false,
                    false,
                    false,
                    true,
                    false,
                ]);
                break;
            case "programming":
                setActiveArray([
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    true,
                ]);
                break;
            default:
                setActiveArray([
                    true,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                ]);
                break;
        }
    };

    return (
        <div className="filter-tag">
            <span
                id="all"
                data-testid="filtertag-item"
                className={
                    activeArray[0]
                        ? "filter-tag__item filter-tag__active"
                        : "filter-tag__item"
                }
                onClick={(event)=>{
                  handleSelected(event)
                  
                }}
            >
                {"    "}
                All{"   "}
            </span>
            <span
                id="finance"
                data-testid="filtertag-item"
                className={
                    activeArray[1]
                        ? "filter-tag__item filter-tag__active"
                        : "filter-tag__item"
                }
                onClick={(event)=>{
                  handleSelected(event)
                 
                }}
            >
                <img src={performanceMoney} alt="" /> Finance
            </span>
            <span
                id="business"
                data-testid="filtertag-item"
                className={
                    activeArray[2]
                        ? "filter-tag__item filter-tag__active"
                        : "filter-tag__item"
                }
                onClick={(event)=>{
                  handleSelected(event)
                 
                }}>
                <img src={handshake} alt="" /> Business
            </span>
            <span
                id="design"
                data-testid="filtertag-item"
                className={
                    activeArray[3]
                        ? "filter-tag__item filter-tag__active"
                        : "filter-tag__item"
                }
                onClick={(event)=>{
                  handleSelected(event)
                  
                }}
            >
                <img src={paintingPalette} alt="" /> Design
            </span>
            <span
                id="digital-marketing"
                data-testid="filtertag-item"
                className={
                    activeArray[4]
                        ? "filter-tag__item filter-tag__active"
                        : "filter-tag__item"
                }
                onClick={(event)=>{
                  handleSelected(event)
                  
                }}
            >
                <img src={phoneWrite} alt="" /> Digital Marketing
            </span>
            <span
                id="engineering"
                data-testid="filtertag-item"
                className={
                    activeArray[5]
                        ? "filter-tag__item filter-tag__active"
                        : "filter-tag__item"
                }
                onClick={(event)=>{
                  handleSelected(event)
                  
                }}
            >
                <img src={carActions} alt="" /> Engineering
            </span>
            <span
                id="programming"
                data-testid="filtertag-item"
                className={
                    activeArray[6]
                        ? "filter-tag__item filter-tag__active"
                        : "filter-tag__item"
                }
                onClick={(event)=>{
                  handleSelected(event)
                  
                }}
            >
                <img src={fileCode} alt="" /> Programming
            </span>
        </div>
    );
};

export default FilterTag;
