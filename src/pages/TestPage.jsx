import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Header from "../components/Header";
import Display from '../components/ui/Display';
import Tag from '../components/ui/Tag';
import {memes} from "../data/data";

const HomePage = () => {
  return (
    <div className='w-screen'>
      <Header />
      <Container>
          <div className="grid grid-cols-4 gap-3">
            {
              memes.map((meme) => (
                <div key={meme._id}>
                  <Link to={`/meme/${meme._id}`} >
                    <Display />
                  </Link>
                  <div className='flex justify-center'>
                  {
                  meme.tags.map((tag)=>(
                    <div key={tag._id} className='my-1 mx-1'>
                      <Tag title={tag.label} to="/" color={tag.color}/>
                    </div>
                  ))
                  }
                  </div>
                </div>
              ))
            }
          </div>
      </Container>
    </div>
  )
}

export default HomePage;