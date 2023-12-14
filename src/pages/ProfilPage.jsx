import React, { useParams } from 'react'
import Header from '../components/Header';

const ProfilPage = () => {
    const { id } = useParams();

    const [data, setData] = useState();
  return (
    <div>
        <Header />
    </div>
  )
}

export default ProfilPage