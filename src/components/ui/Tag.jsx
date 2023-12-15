import React from "react";
import { Link } from "react-router-dom";

const Tag = (props) => {
  return (
    <Link
      to={props.to}
      style={{ backgroundColor: props.color }}
      className={`flex items-center w-fit h-3 px-2 py-2 border-[#042137] border-2 rounded-3xl font-bold uppercase text-lg text-center text-black m-1`}
    >
      <p className="text-[#042137]">{props.title}</p>
    </Link>
  );
};

export default Tag;
