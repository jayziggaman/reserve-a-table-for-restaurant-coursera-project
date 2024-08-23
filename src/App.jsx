import React, { useEffect, useState } from "react";
import Home from "./PAGES/Home/Home";
import logoOne from "./images/logo-1.png"
import logoTwo from "./images/logo-2.png"
import { Route, Routes } from "react-router-dom";
import Header from "./COMPONENTS/GENERAL-COMPONENTS/Header/Header";
import Nav from "./COMPONENTS/GENERAL-COMPONENTS/Nav/Nav";
import Footer from "./COMPONENTS/GENERAL-COMPONENTS/Footer/Footer";
import BookingPage from "./PAGES/BookingPage/ReserveTable";

export const appContext = React.createContext()

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    function resize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])


  useEffect(() => {
    if (windowWidth >= 650) {
      setShowNav(false)
    }
  }, [windowWidth])



  return (
    <appContext.Provider
    value={{
      windowWidth, logoOne, logoTwo, showNav, setShowNav
    }}
  >
    <Header />
    
    <Nav />

    <Routes>
      <Route path='/' element={<Home />} />
      
      <Route path='/book-table' element={<BookingPage />} />
    </Routes>
      
    <Footer />

  </appContext.Provider>
  );
}

export default App;
