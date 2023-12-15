import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/template.png";
import Tag from "./Tag";

const Display = (props) => {
  return (
    <div className="justify-center">
      <div>
        <Link to={props.to} className="rounded-md h-64">
          <img src={props.filePath} alt={`Meme ${1}`} className="w-fit h-fit rounded-md"/>
        </Link>
        <div className='flex my-1'>
          {
          props.tags.map((tag, index)=>(
            <div key={index} className='mx-1'>
              <Tag title={tag} to="/"/>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Display;