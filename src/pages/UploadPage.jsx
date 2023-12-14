import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Container from '../components/ui/Container';

const Upload = () => {
  return (
    <div className='w-screen h-screen'>
        <Header />
        <div className='flex'>
            <Sidebar />
            <Container>
                <div>
                    Upload
                </div>
            </Container>
        </div>
    </div>
  )
}

export default Upload