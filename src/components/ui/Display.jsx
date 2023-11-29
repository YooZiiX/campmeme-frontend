import React from "react";
import Image from "../../assets/template.png";
import Tag from "./Tag";

const Display = (props) => {
  return (
    <div className="m-2 w-300px h-500px">
        <img src={Image} alt={`Meme ${1}`} className=" w-full h-full rounded-md"/>
    </div>
  )
}

export default Display;