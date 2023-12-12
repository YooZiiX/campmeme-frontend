import React from "react";
import Button from "../components/ui/Button";
import Header from "../components/Header";
import MostPopular from "../components/MostPopular";
import RandomMeme from "../components/RandomMeme";
import Container from "../components/ui/Container";

const HomePage = () => {
  return (
    <div className="w-screen">
      <Header />
      <Container>
        <MostPopular />
        <RandomMeme />
      </Container>
    </div>
  )
}

export default HomePage;