import React from 'react'
import "./BackButton.scss"
import { Link } from "react-router-dom"
import BackButtonArrow from "../../assets/images/back-arrow.svg"

const BackButton = (props) => {
    // When routing is implemented, the button can be changed to a link component and the linkTo prop can be used to define which page the button will link to
    const { linkTo, onClick } = props;

    return (
        <div className='back'>
            <Link to={linkTo}>
                <button className='back__button' onClick={onClick}>
                    <img src={BackButtonArrow} alt="back arrow" />
                </button>
            </Link>
            
        </div>
    )
}

export default BackButton