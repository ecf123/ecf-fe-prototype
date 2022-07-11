import React from 'react'
import BackButton from '../../components/BackButton/BackButton'
import TrophyStats from '../../components/TrophyStats/TrophyStats'
import Button from '../../components/Button/Button'
import './PathwayOverview.scss';


// path: /pathways/:pathwayId

const PathwayOverview = ({userProfile, card }) => {
  const { header, topics, image } = card;

  return (
    <div className='pathway-overview'>
      <header className='pathway-overview__header'>
        <BackButton linkTo="linkTo"/>
        <TrophyStats userProfile={userProfile}/>
      </header>
      <div className='card-conatiner'>
      <h1 className='card-conatiner__header'>{header}</h1>
      <img className='card-container__image' src={image} alt={topics} />
      </div>
    
     <div className='pathway-overview__button' ><Button buttonText={"START PATHWAYS"} /></div>
     
    </div>
  )
}
// import React from "react";
// import "./PathwayOverview.scss";

// import MenuBar from "../../components/MenuBar/MenuBar";

// // path: /pathways/:pathwayId

// const PathwayOverview = () => {
//     // Category state to be used later to deremine which content is displayed based on the users selection
//     // const [category, setCategory] = useState("overview");

//     const handleCategoryChange = (event) => {
//         // setCategory(event.target.innerText.toLowerCase());
//         console.log(event.target.innerText.toLowerCase());
//     };

//     return (
//         <div>
//             PathwayOverview
//             <div className="pathway-overview__filters">
//                 <MenuBar
//                     link1="Overview"
//                     link2="Structure"
//                     link3="Careers"
//                     onClickLink={handleCategoryChange}
//                 />
//             </div>
//         </div>
//     );
// };

// export default PathwayOverview;
