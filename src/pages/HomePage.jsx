import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <div className='bg-white'>
            <Link to='/meme/5'>To Meme</Link>
        </div>
        {/* <div>
            <Card title={"MEME"} id={1} />
            <Card title={"PAS"} id={2} />
            <Card title={"UN"} id={3} />
            <Card title={"DEUX"} id={4} />
        </div> */}
    </div>
  )
}

export default HomePage