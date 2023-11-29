import React from "react";

const Tag = (props) => {

    let background;
    switch (props.color) {
        case 'red':
            background = 'bg-red-300';
            break;
        case 'blue':
            background = 'bg-blue-300';
            break;
        case 'cyan':
            background = 'bg-cyan-300';
            break;
        case 'green':
            background = "bg-green-300";
            break;
        case 'orange':
            background = "bg-orange-300";
            break;
        default:
            background = 'bg-white-300';
            break;
    }

    return (
        <div className={`flex items-center w-fit h-4 px-2 py-2 border-black border-1 rounded-3xl ${background} font-bold uppercase text-xs text-center`}>{props.title}</div>
    )
}

export default Tag;