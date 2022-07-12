import React from "react";
import "./PathwayOverview.scss";

import MenuBar from "../../components/MenuBar/MenuBar";

// path: /pathways/:pathwayId

const PathwayOverview = () => {
  // Category state to be used later to deremine which content is displayed based on the users selection
  // const [category, setCategory] = useState("overview");

  const handleCategoryChange = (event) => {
    // setCategory(event.target.innerText.toLowerCase());
    console.log(event.target.innerText.toLowerCase());
  };

  return (
    <div>
      PathwayOverview
      <div className="pathway-overview__filters">
        <MenuBar link1="Overview" link2="Structure" link3="Careers" onClickLink={handleCategoryChange} />
      </div>
    </div>
  );
};

export default PathwayOverview;
