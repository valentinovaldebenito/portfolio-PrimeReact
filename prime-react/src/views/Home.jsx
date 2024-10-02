import React from "react";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import Navbar from "../components/Navbar";
import "../index.css";

function Home() {
  const imgCard = new URL('../assets/programming-background-concept.jpg', import.meta.url).href;

  return (
    <>
      <div className="w-full h-screen flex flex-column align-items-center bg-gray-100 p-0 m-0">
        <Navbar />
        <div className="w-full h-full flex flex-column justify-content-center align-items-center gap-4">
          <h1>Inicio</h1>
          <div className="w-full flex flex-row justify-content-center gap-4">
            <Card className="w-3 h-26rem flex flex-column align-items-center p-2 hover:shadow-4 cursor-pointer">
              <div className="flex w-full justify-content-center px-4 mb-4">
                <Image src={imgCard} width="100%"/>
              </div>
              <div className="w-full">
                <span>
                  Me llamo Valentino Valdebenito, soy un desarrollador Full-Stack, actualmente cursando la carrera de
                  Técnico Superior en Desarrollo de Software Full-Stack en el Instituto Superior Cipolletti.
                </span>
              </div>
            </Card>
            <Card className="w-3 h-26rem flex flex-column align-items-center p-2 hover:shadow-4 cursor-pointer">
              <div className="flex w-full justify-content-center px-4 mb-4">
                <Image src={imgCard} width="100%"/>
              </div>
              <div className="w-full">
                <span>
                  Me llamo Valentino Valdebenito, soy un desarrollador Full-Stack, actualmente cursando la carrera de
                  Técnico Superior en Desarrollo de Software Full-Stack en el Instituto Superior Cipolletti.
                </span>
              </div>
            </Card>
            <Card className="w-3 h-26rem flex flex-column align-items-center p-2 hover:shadow-4 cursor-pointer">
              <div className="flex w-full justify-content-center px-4 mb-4">
                <Image src={imgCard} width="100%"/>
              </div>
              <div className="w-full">
                <span>
                  Me llamo Valentino Valdebenito, soy un desarrollador Full-Stack, actualmente cursando la carrera de
                  Técnico Superior en Desarrollo de Software Full-Stack en el Instituto Superior Cipolletti.
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
