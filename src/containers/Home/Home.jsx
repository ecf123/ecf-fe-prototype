import React from 'react'
import "./Home.scss"
import WelcomeHeader from '../../components/WelcomeHeader/WelcomeHeader'
import SearchContainer from '../../containers/SearchContainer/SearchContainer'
import Navigation from '../../components/Navigation/Navigation'


// path: /

const Home = ({ userProfile }) => {
  
    return (
        <div className='home-container'>
            <WelcomeHeader userProfile = {userProfile} />
            <SearchContainer title="Pathways"  pathwaysLink="/"  />
            <Navigation/>
        </div>
    )
}

export default Home