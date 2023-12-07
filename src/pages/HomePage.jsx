import React from "react";
import Button from "../components/ui/Button";
import Header from "../components/Header";
// import Container from "../components/ui/Container";

const HomePage = () => {
  return (
    <div className='w-screen h-screen'>
      <Header />
      <Button title="DEV" to="/dev"/>
    </div>
  )
}

export default HomePage