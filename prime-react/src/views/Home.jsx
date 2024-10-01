import React from "react";
import { useNavigate } from "react-router-dom";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import "../index.css";

function Home() {
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
        <div className="w-full h-full flex flex-column justify-content-center align-items-center gap-4">
          <h1>Inicio</h1>
          <div className="w-full flex flex-row justify-content-center gap-4">
            <Card className="w-3 h-26rem flex justify-content-center align-items-center">
              <h1>Hola mundo</h1>
            </Card>
            <Card className="w-3 h-26rem flex justify-content-center align-items-center">
              <h1>Hola mundo</h1>
            </Card>
            <Card className="w-3 h-26rem flex justify-content-center align-items-center">
              <h1>Hola mundo</h1>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
