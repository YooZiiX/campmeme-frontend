import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  let background = "#F9C22E";
  // switch (props.type) {
  //   case "danger":
  //     background = "#F15946";
  //     break;
  //   case "accept":
  //     background = "#8ED081";
  //     break;
  //   default:
  //     background = "#F9C22E";
  //     break;
  // }

  return (
    <Link to={props.to} className={`flex bg-[${background}] rounded-md w-fit m-2 px-3 py-2 text-black text-center text-lg font-bold uppercase hover:`}>
        {props.title}
    </Link>
    
  )
}

export default Button