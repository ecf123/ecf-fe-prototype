import React from "react";
import "./Home.scss";
import WelcomeHeader from "../../components/WelcomeHeader/WelcomeHeader";
import Carousel from "../../components/Carousel/Carousel";

// path: /

const Home = ({userProfile}) => {
  return (
    <div className="home-container">
      <WelcomeHeader userProfile={userProfile} />
      <Carousel />
    </div>
  );
};

export default Home;
