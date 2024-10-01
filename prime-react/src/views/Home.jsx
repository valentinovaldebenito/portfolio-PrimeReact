import React from "react";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Avatar } from "primereact/avatar";
import { SplitButton } from "primereact/splitbutton";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import "../index.css";

function Home() {
  const items = [
    {
      label: "Update",
      icon: "pi pi-refresh",
    },
    {
      label: "Delete",
      icon: "pi pi-times",
    },
  ];
  const startContent = (
    <React.Fragment>
      <Avatar image="../assets/linkedin_img.jpeg" />
    </React.Fragment>
  );

  const endContent = (
    <React.Fragment>
      <Button icon="pi pi-home" className="mr-2" />
      <Button icon="pi pi-search" className="mr-2" />
      <Button icon="pi pi-code" />
    </React.Fragment>
  );

  return (
    <>
      <div className="w-full h-screen flex flex-column align-items-center bg-gray-100 p-0 m-0">
        <div className="w-full h-[10%] flex align-items-center m-0 p-0">
          <Toolbar
            className="bg-blue-500 w-full h-auto flex align-items-center m-0"
            start={startContent}
            //center={centerContent}
            end={endContent}
          ></Toolbar>
        </div>
        <div className="w-full h-full flex justify-content-center align-items-center">
          <Card className="w-2 h-2 flex justify-content-center align-items-center">
            <h1>Hola mundo</h1>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Home;
