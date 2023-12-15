import React from "react";
import { useParams } from "react-router-dom"; 
import Header from "../components/Header";
import Container from "../components/ui/Container";
import GridDisplay from "../components/ui/GridDisplay";
import Sidebar from "../components/Sidebar";


const ResultPage = () => {
  let { q } = useParams();
  const postContent = {
    query: q
  };

  return (
    <div className="w-full">
      <Header />
      <Sidebar />
      <div className="flex">
        <Container>
          <div className="m-10 mt-5">
            <GridDisplay 
              url="http://25.53.196.55:8080/meme/query"
              title="Résultats"
              body_json={postContent}
              maxTag={5}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ResultPage;
