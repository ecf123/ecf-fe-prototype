import React from 'react';
import "./PathwaysCard.scss";
import image from "../../assets/images/financial-forest.svg";
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
const PathwaysCard = ({card}) => {
    const {header, topics, percentage} = card;
  return (
    <div className='card'>
        <div className='card__progress'>
            <p className='card__progress--bar'>placeholder</p>
            <p className='card__progress--number'>{percentage}</p>
        </div>
        <img className='card__image' src={image} alt="" />
        <h1 className='card__header'>{header}</h1>
        <h2 className='card__topics'>{topics}</h2>
    </div>
  )
}
export default PathwaysCard