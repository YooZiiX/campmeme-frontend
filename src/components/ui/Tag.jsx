import React from "react";

const Tag = (props) => {
    return (
        <div className={`flex items-center w-fit h-4 px-2 py-2 border-black border-2 rounded-3xl bg-[${props.color}] font-bold uppercase text-xs text-center text-black`}>{props.title}</div>
    )
}

export default Tag;