import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Header from "../components/Header";
import Container from "../components/ui/Container";
import Tag from "../components/ui/Tag";
import Sidebar from "../components/Sidebar";
import icone_coeur from '../assets/icon_coeur.png';
import icone_share from '../assets/icon_share.png';


const MemePage = () => {
  // const url = process.env.HAMACHI || process.env.BACKEND || "http://25.53.196.55:8080";
  let { id } = useParams();
  const [data, setData] = useState({
    id: 0,
    contributeur: "username",
    filePath: "",
    tags: ["1", "2"],
  });
  
  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
  
    axios
      .get(`http://25.53.196.55:8080/meme/${id}`, config)
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

  return (
    <div className="w-screen">
      <Header />
      <Sidebar />
      <div className="flex">
        <Container>
          <div className="align-center m-10 mt-5">
            <div className="flex flex-wrap justify-center max-w-[100%]">
              <div className="rounded-md max-w-[40%] w-[40%]">
                <img
                  src={data.filePath}
                  alt={`Meme ${data.id}`}
                  className="rounded-lg hover:rounded-2xl duration-[400ms]"
                />

                <div className="flex flex-wrap justify-center my-3">
                  <img src={icone_coeur} alt='icone' className='m-2 w-10' />
                  <img src={icone_share} alt='icone' className='m-2 w-10' />
                </div>

                <div className="flex flex-wrap justify-center my-3">
                  {data.tags.map((tag, index) => (
                    <Tag to="/" title={tag} key={index} />
                  ))}
                </div>
                
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MemePage;
