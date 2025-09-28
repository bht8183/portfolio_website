import { useState } from 'react'
import NavBar from './components/NavBar'
import LandingPage from './pages/LandingPage'
import Contact from "./components/Contact";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

export default function App() {
  return (
    <>
      <NavBar />
      <Contact />
      <LandingPage />
    </>
  );
}