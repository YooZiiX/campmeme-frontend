import React from "react";
import { Link } from "react-router-dom";

const Tag = (props) => {
    return (
        <Link to={props.to} style={{backgroundColor: props.color}} className={`flex items-center w-fit h-4 px-2 py-2 border-black border-2 rounded-3xl font-bold uppercase text-xs text-center text-black`}>
            <p className="text-black">
                {props.title}
            </p>
        </Link>
    )
}

export default Tag;