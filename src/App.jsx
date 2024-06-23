import React, { useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import PreLoader from "./components/PreLoader";
import ScrollTop from "./components/ScrollTop";
import { Outlet } from "react-router-dom";
import './App.css'
import './style.css'
import Footer from "./components/Footer";

const App = () => {

  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PreLoader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollTop />
        <Outlet/>
     
        <Footer /> 
      </div>
    </>
  );
};

export default App;
