import React, { useState } from "react";
import "./FilterTag.scss";
import performanceMoney from "../../assets/images/performance-money-icon.svg";
import handshake from "../../assets/images/handshake-icon.svg";
import paintingPalette from "../../assets/images/painting-palette-icon.svg";
import phoneWrite from "../../assets/images/phone-write-icon.svg";
import carActions from "../../assets/images/car-actions-icon.svg";
import fileCode from "../../assets/images/file-code-icon.svg";

const FilterTag = (filterArray) => {
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
                    false,
                    true,
                    false,
                    false,
                    false,
                    false,
                    false,
                ]);
                break;
            case "1":
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
            case "2":
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
            case "3":
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
            case "4":
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
            case "5":
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
            case "6":
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
                id="1"
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
                id="2"
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
                id="3"
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
                id="4"
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
                id="5"
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
                id="6"
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
