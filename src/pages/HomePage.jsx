import React from "react";
import Header from "../components/Header";
import Container from "../components/ui/Container";
import GridDisplay from "../components/ui/GridDisplay";
import Sidebar from "../components/Sidebar";


const HomePage = () => {
  return (
    <div className="w-full">
      <Header />
      <Sidebar />
      <div className="flex">
        <Container>
          <div className="m-10 mt-5">
            <GridDisplay 
              url="http://25.53.196.55:8080/meme/trend"
              title="Memes Populaires"
              maxTag={5}
            />
            <GridDisplay 
              url="http://25.53.196.55:8080/meme/random?quantity=6"
              title="Memes Aléatoires"
              maxTag={2}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
