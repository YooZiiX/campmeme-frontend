import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from "../components/Header";
import Tag from '../components/ui/Tag';
import Display from '../components/ui/Display';
import icone_coeur from '../assets/icon_coeur.png';
import icone_share from '../assets/icon_share.png';

const MemePage = () => {
  const { id } = useParams();
  // const url = process.env.HAMACHI || process.env.BACKEND || "http://25.53.196.55:8080";
  const [data, setData] = useState({
    id: 0,
    contributeur: "username",
    filePath: "",
    tags: [
      "1",
      "2"
    ]
  });

  useEffect(() => {
    const config = {
      headers: {
          "Content-type": "application/json",
      },
    };
  
    axios.get(`http://25.53.196.55:8080/meme/${id}`, config)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        } else {
          alert(`Can't Reach Meme n°${id}`);
        }
      })
      .then((result) => {
        setData(result);
      });
  }, [id]);

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

    axios.get("http://25.53.196.55:8080/meme/random?quantity=6", config)
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
        <div className='h-screen w-screen'>   
      <Header />
      <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-row align-top'>
          <div className='m-2 mr-40'>
            <div>{data ? data.contributeur : "Contributor"}</div>
          </div>
          <div className='flex items-start'>
            <div className='w-full flex justify-center flex-col'>
              <img src={`${data.filePath}`} alt='img' className='m-2 h-full' /> 
              <div className='flex'>       
                <img src={icone_coeur} alt='icone' className='m-2 w-5 h-5' />
                <img src={icone_share} alt='icone' className='m-2 w-5 h-5' />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-2'>
            {data.tags.map(
              (tag, index) => (
                <Tag to="/" title={tag} key={index} />
              )
            )}
          </div>
        </div>
      </div>
      <div className='m-2 ml-80'>
        <div>Suggestion</div>
        <div className="grid grid-cols-3 gap-4 ml-20">
            {
              randomMemes.map((meme) => (
              <div key={meme.id} className="flex justify-center">
                <Display to={`/meme/${meme.id}`} filePath={meme.filePath} tags={meme.tags} />
              </div>
              ))
            }
        </div>
      </div>
    </div>

  );
};

export default MemePage;