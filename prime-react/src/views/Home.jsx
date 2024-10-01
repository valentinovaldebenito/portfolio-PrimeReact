import React from "react";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import Navbar from "../components/Navbar";
import "../index.css";

function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-column align-items-center bg-gray-100 p-0 m-0">
        <Navbar />
        <div className="w-full h-full flex flex-column justify-content-center align-items-center gap-4">
          <h1>Inicio</h1>
          <div className="w-full flex flex-row justify-content-center gap-4">
            <Card className="w-3 h-26rem flex flex-column align-items-center">
              <div className="flex w-full justify-content-center">
                <Image src="" width="200px" height="200px" />
              </div>
              <div className="w-full">
                <span>
                  Me llamo Valentino Valdebenito, soy un desarrollador Full-Stack, actualmente cursando la carrera de
                  Técnico Superior en Desarrollo de Software Full-Stack en el Instituto Superior Cipolletti.
                </span>
              </div>
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
