import React from "react"
import "./global.css"
import Header from "./components/Header/Header.jsx"
import Home from "./components/Home/Home.jsx"
import Scroll from "./components/ScrollAnimation/Scroll.jsx"
import Service from "./components/Services/Service.jsx"
import About from "./components/About/About.jsx"
import Choose from "./components/Choose/Choose.jsx"
import Doctor from "./components/Doctor/Doctor.jsx"
import Footer from "./components/Footer/Footer.jsx"
import ScrollTop from "./components/ScrollTop/ScrollTop.jsx"

function App() {


  return (
    <>
      <Header/>
     <Home/>
     <Scroll children={<Service/>}/>
     <Scroll children={<About/>}/>
     <Scroll children={<Choose/>}/>
     <Scroll children={<Doctor/>}/>
     <Footer/>
     <ScrollTop/>
    </>
  )
}

export default App
