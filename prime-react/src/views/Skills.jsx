import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";

function Skills() {

  return (
    <>
      <div className="w-full h-screen flex flex-column align-items-center bg-gray-100 p-0 m-0">
        <Navbar />
        <div className="w-full h-full flex justify-content-center align-items-center gap-4">
          <h1>Habilidades</h1>
        </div>
      </div>
    </>
  );
}

export default Skills;
