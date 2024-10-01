import React from "react";
import { useNavigate } from "react-router-dom";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import "../index.css";

function About() {
  const navigate = useNavigate();

  function navegar(ruta) {
    navigate("/" + ruta);
  }

  const startContent = <Avatar image="../assets/linkedin_img.png" size="xlarge" shape="circle" className="bg-white" />;

  const endContent = (
    <React.Fragment>
      <Button
        label="Inicio"
        icon="pi pi-home"
        className="mr-2 bg-green-600 text-white border-none"
        onClick={() => navegar("")}
      />
      <Button
        label="Sobre mí"
        icon="pi pi-search"
        className="mr-2 bg-green-600 text-white border-none"
        onClick={() => navegar("about")}
      />
      <Button
        label="Habilidades"
        icon="pi pi-code"
        className="bg-green-600 text-white border-none"
        onClick={() => navegar("skills")}
      />
    </React.Fragment>
  );

  return (
    <>
      <div className="w-full h-screen flex flex-column align-items-center bg-gray-100 p-0 m-0">
        <div className="w-full h-[10%] flex align-items-center m-0 p-0">
          <Toolbar
            className="bg-green-500 w-full h-auto flex align-items-center border-none border-noround m-0"
            start={startContent}
            end={endContent}
          ></Toolbar>
        </div>
        <div className="w-full h-full flex justify-content-center align-items-center gap-4">
        <h1>Sobre mí</h1>
        </div>
      </div>
    </>
  );
}

export default About;
