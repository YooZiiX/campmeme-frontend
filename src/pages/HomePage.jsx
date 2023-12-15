import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Container from "../components/ui/Container";
import Display from "../components/ui/Display";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  const [memes, setMemes] = useState([
    {
      id: 0,
      tags: [
        "ok"
      ],
      filePath: "",
      likeCount: 0,
      contributorId: "",
    }
  ]);

  useEffect(() => {
    const config = {
      headers: {
          "Content-type": "application/json",
      },
    };

    axios.get("http://25.53.196.55:8080/meme/trend", config)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        alert("Can't reach Trending Memes !");
      }
    }).then((result) => {
      setMemes(result);
    });
  }, []);
  
  const [randomMemes, setRandomMemes] = useState([
    {
      id: 0,
      tags: [
        "ok"
      ],
      filePath: "",
      likeCount: 0,
      contributorId: "",
    }
  ]);

  useEffect(() => {
    const config = {
      headers: {
          "Content-type": "application/json",
      },
    };

    axios.get("http://25.53.196.55:8080/meme/random", config)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      } else {
        alert("Can't reach Random Memes !");
      }
    }).then((result) => {
      setRandomMemes(result);
    });
  }, []);

  return (
    <div className="w-screen">
      <Header />
      <div className='flex'>
            <Sidebar />
            <Container>
                <p className="flex justify-center border-b-2 border-[#64BEB6] text-4xl font-extrabold font-sans text-[#63C6BD] m-4">
                   Memes Populaires
                </p>
                <div className="grid grid-cols-3 gap-x-3 gap-y-2 mt-4">
                  {
                  memes.map((meme) => (
                  <div key={meme.id} className="flex justify-center">
                    <Display to={`/meme/${meme.id}`} filePath={meme.filePath} tags={meme.tags} />
                  </div>
                  ))
                  }
                </div>
              <div className='m-4'>
                <p className="flex justify-center border-b-2 border-[#64BEB6] text-4xl font-extrabold font-sans text-[#63C6BD] m-4">
                  Random Memes
                </p>
                <div className="grid grid-cols-3 gap-x-3 gap-y-2 mt-4">
                {
                  randomMemes.map((meme) => (
                  <div key={meme.id} className="flex justify-center">
                    <Display to={`/meme/${meme.id}`} filePath={meme.filePath} tags={meme.tags} />
                  </div>
                  ))
                  }
              </div>
            </div>
          </Container>
        </div>
    </div>
  )
}

export default HomePage;