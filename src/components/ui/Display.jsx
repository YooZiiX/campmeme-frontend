import React from "react";
import { Link } from "react-router-dom";
import Tag from "./Tag";

const Display = (props) => {
  return (
    <div className="justify-center max-w-[100%]">
      <Link to={props.to} className="rounded-md h-64">
        <img
          src={props.filePath}
          alt={`Meme ${1}`}
          className="w-fit h-fit rounded-lg hover:rounded-2xl duration-[400ms]"
        />
      </Link>
      <div className="flex flex-wrap justify-center my-3">
          {props.tags.map((tag, index) => (
                index <= props.maxTag-1 
                  ? <Tag to="/" title={tag} key={index} />
                  : index === props.maxTag && <Tag to="/" title={"..."} key={index} />
              ))}
      </div>
    </div>
  );
};

export default Display;
