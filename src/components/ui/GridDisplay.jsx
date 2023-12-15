import React, { useEffect, useState } from "react";
import Display from "./Display";
import axios from "axios";
import { getMemesByGET, getMemesByPOST } from "../../utils/MemeProvider";

const GridDisplay = (props) => {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    if ('body_json' in props) {
      getMemesByPOST(props.url, props.body_json, setMemes);
    } else {
      getMemesByGET(props.url, setMemes);
    }
  }, []);

  return (
    <div className="">
      {props.title !== "" && (
        <p className="flex justify-center border-y-2 bg-[#64BEB6] rounded-lg text-4xl text-white text-center py-3">
          {props.title}
        </p>
      )}
      <div className="grid grid-cols-3 gap-x-10 gap-y-2 mt-4 place-items-center">
        {memes.map((meme) => (
          <div key={meme.id} className="flex justify-center w-full">
            <Display
              to={`/meme/${meme.id}`}
              filePath={meme.filePath}
              tags={meme.tags}
              maxTag={props.maxTag}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridDisplay;
