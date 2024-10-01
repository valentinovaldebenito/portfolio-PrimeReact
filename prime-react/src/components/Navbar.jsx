import React from "react";
import { useNavigate } from "react-router-dom";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import "../index.css"


function Navbar() {
    const img = new URL('../assets/linkedin_img.png', import.meta.url).href;
    const navigate = useNavigate();
  
    function navegar(ruta) {
      navigate("/" + ruta);
    }
  
    const startContent = (
      <React.Fragment>
        <Avatar image={img} size="large" shape="circle" className="bg-white-alpha-90"/>
        <span className="text-white font-bold text-2xl ml-2">Valentino Valdebenito</span>
      </React.Fragment>
    );
  
    const endContent = (
      <React.Fragment>
        <Button
          label="Inicio"
          icon="pi pi-home"
          className="mr-2 bg-purple-700 text-white border-none"
          onClick={() => navegar("")}
        />
        <Button
          label="Sobre mí"
          icon="pi pi-search"
          className="mr-2 bg-purple-700 text-white border-none"
          onClick={() => navegar("about")}
        />
        <Button
          label="Habilidades"
          icon="pi pi-code"
          className="bg-purple-700 text-white border-none"
          onClick={() => navegar("skills")}
        />
      </React.Fragment>
    );

    return (
        <div className="w-full h-[10%] flex align-items-center m-0 p-0">
          <Toolbar
            className="bg-purple-800 w-full h-auto flex align-items-center border-none border-noround m-0"
            start={startContent}
            end={endContent}
          ></Toolbar>
        </div>
    );
}

export default Navbar;