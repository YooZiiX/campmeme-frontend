import React from "react";
import Button from "./ui/Button";

const Sidebar = () => {
  const userId = window.localStorage.getItem("userId");

  return (
    <div className="fixed left-0 bg-[#FCFCFC] border-r-2 border-neutral-200 w-[20%] max-w-[20%] h-full top-[64px] shadow">
      <div className={`grid grid-cols-1 gap-y-20 px-8 mt-8 h-min place-items-center`}>
        <div className="flex justify-center items-center h-full w-full">
          <Button
            to={userId ? "/upload" : "/connexion"}
            title="Déposer un meme"
            bg="#0FEAD4"
          />
        </div>
        <div className="grid grid-cols-1 gap-y-10 w-[75%]">
          <div className="flex justify-center items-center">
            <Button to="/" title="Tendances" bg="#45B6AA" />
          </div>
          <div className="flex justify-center items-center">
            <Button to="/" title="Récent" bg="#45B6AA" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
