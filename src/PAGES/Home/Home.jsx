import React from 'react'
import Landing from '../../COMPONENTS/HOME-COMPONENTS/Landing/Landing'
import Reviews from '../../COMPONENTS/HOME-COMPONENTS/Reviews/Reviews'
import Specials from '../../COMPONENTS/HOME-COMPONENTS/Specials/Specials'
import "./Home.css"

const Home = () => {
  return (
    <main className="home-main">
      <Landing />

      <Specials />

      <Reviews />
    </main>
  )
}

export default Home