import React from "react";
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import MiniData from './components/MiniData';
import Info from './components/Info';
import Service from './components/Service';
import Data from './components/Data';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Error from "./components/Error";
import Logo from "./components/Logo";

const Layout=()=>{
    return(
        <>
      
      <Body />
      <About />
      <MiniData />
      <Info />
      <Service />
      <Data />
      <Faq />
      <Footer />
      <Logo/>
      
        </>
    )
}
export default Layout;