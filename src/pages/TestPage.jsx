import React from 'react';
import Container from '../components/ui/Container';
import Header from "../components/Header";
import Display from '../components/ui/Display';
import { memes } from "../data/data";
import Sidebar from '../components/Sidebar';

const TestPage = () => {
  return (
    <div className='w-screen h-screen'>
      <Header />
      <div className='flex'>
        <Sidebar />
        <Container>
          <div className="grid grid-cols-4 gap-x-3 gap-y-2">
            {
            memes.map((meme) => (
              <div key={meme._id} className="flex justify-center">
                <Display to={`/meme/${meme._id}`} tags={meme.tags} />
              </div>
            ))
            }
          </div>
        </Container>
      </div>
    </div>
  )
}

export default TestPage;