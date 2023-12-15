import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link
      to={props.to}
      style={{ background: `${props.bg}` }}
      className={`flex justify-center rounded-md w-full h-fit px-[10%] py-[3%] text-lg font-bold uppercase ${props.className} hover:shadow-md duration-100`}
    >
      <p className="text-black text-center">{props.title}</p>
    </Link>
  );
};

export default Button;
