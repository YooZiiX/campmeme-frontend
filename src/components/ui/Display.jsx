import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/template.png";
import Tag from "./Tag";

const Display = (props) => {
  return (
    <div className="w-300px h-500px justify-center">
      <div>
        <Link to={props.to} className="rounded-md">
          <img src={Image} alt={`Meme ${1}`} className="w-fit h-fit rounded-md"/>
        </Link>
        <div className='flex my-1 justify-center'>
          {
          props.tags.map((tag)=>(
            <div key={tag._id} className='mx-1'>
              <Tag title={tag.label} to="/" color={tag.color}/>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}

export default Display;