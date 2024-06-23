import React from "react";

const PreLoader = (props) => {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
};

export default PreLoader;
