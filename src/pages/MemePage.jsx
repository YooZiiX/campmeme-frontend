import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from "../components/Header";
import Tag from '../components/ui/Tag';
import Image from '../assets/template.png';
import icone_coeur from '../assets/icone_coeur.png';
import icone_share from '../assets/icone_share.png';

const MemePage = () => {
  const { id } = useParams();
  // const url = process.env.HAMACHI || process.env.BACKEND || "http://25.53.196.55:8080";
  console.log(window.localStorage.getItem("userItem"));

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
        return response.data;
      })
      .then((result) => {
        setData(result);
      });
  }, [id]);

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
          <img src={Image} alt='img' className='m-2 h-20 w-20' />
          <img src={Image} alt='img' className='m-2 h-20 w-20' />
          <img src={Image} alt='img' className='m-2 h-20 w-20' />
          <img src={Image} alt='img' className='m-2 h-20 w-20' />
          <img src={Image} alt='img' className='m-2 h-20 w-20' />
          <img src={Image} alt='img' className='m-2 h-20 w-20' />
          <img src={Image} alt='img' className='m-2 h-20 w-20' />
          <img src={Image} alt='img' className='m-2 h-20 w-20' />
          <img src={Image} alt='img' className='m-2 h-20 w-20' />
        </div>
      </div>
    </div>

  );
};

export default MemePage;