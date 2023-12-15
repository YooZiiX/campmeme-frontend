import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Header';

const ProfilPage = () => {
    const { id } = useParams();

    const handleLogout = () => {
      window.localStorage.removeItem("userId");
      window.localStorage.removeItem("userToken");
      window.location.href = "/";
    }

    // const [data, setData] = useState();
  return (
    <div className='w-full h-full'>
        <Header />
        <div>
          <div className="bg-red text-red" onClick={handleLogout}>Déconnexion</div>
        </div>
    </div>
  )
}

export default ProfilPage;