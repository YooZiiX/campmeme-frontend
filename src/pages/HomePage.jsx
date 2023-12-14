import React from "react";
import Header from "../components/Header";
import Container from "../components/ui/Container";
import Display from "../components/ui/Display";
import Sidebar from "../components/Sidebar";
import { memes } from '../data/data';

const HomePage = () => {
  const popularsMemes = memes.filter((meme) => meme.isPopular);
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
                  popularsMemes.map((meme) => (
                  <div key={meme._id} className="flex justify-center">
                    <Display to={`/meme/${meme._id}`} tags={meme.tags} />
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
                  memes.map((meme) => (
                    <div key={meme._id} className="flex justify-center">
                      <Display to={`/meme/${meme._id}`} tags={meme.tags} />
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