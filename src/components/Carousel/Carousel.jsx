import React, { useState } from "react";
import "./Carousel.scss";
import PathwaysCard from "../PathwaysCard/PathwaysCard";


const Carousel = props => {
    const {children} = props
    const [touchPosition, setTouchPosition] = useState(null)
    
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])




    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition
    
        if(touchDown === null) {
            return
        }
    
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        if (diff > 5) {
            next()
        }
    
        if (diff < -5) {
            prev()
        }
    
        setTouchPosition(null)
    }



    return (
        <div className="carousel-container">
            <div className="carousel-wrapper" >
            <button className="left-arrow">&lt;</button>
                <div className="carousel-content-wrapper" 
                onTouchStart={handleTouchStart} 
                onTouchMove={handleTouchMove}>
                     
                    <div className="carousel-content">
                        {children}
                    </div>
                </div>
                <button className="right-arrow">&gt;</button>
            </div>
        </div>
    )
}

export default Carousel