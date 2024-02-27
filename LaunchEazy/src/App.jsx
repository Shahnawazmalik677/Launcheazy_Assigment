import React from 'react'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import MidSection from './components/MidSection'
import CardsSection from './components/CardsSection'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <HeroSection/>
    <MidSection/>
    <CardsSection/>
    </BrowserRouter>
    </>
  )
}

export default App
