import React, { useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import PreLoader from "./components/PreLoader";
import ScrollTop from "./components/ScrollTop";
import { Outlet } from "react-router-dom";
import './App.css'
import './style.css'

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
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer /> */}
      </div>
    </>
  );
};

export default App;
