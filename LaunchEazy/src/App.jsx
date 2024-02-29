import React from 'react'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import MidSection from './components/MidSection'
import CardsSection from './components/CardsSection'
import StatsSection from './components/StatsSection'
import InfoSection from './components/InfoSection'
import SecondaryFooter from './components/SecondaryFooter'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <HeroSection/>
    <MidSection/>
    <CardsSection/>
    <StatsSection/>
    <InfoSection/>
    <SecondaryFooter/>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
