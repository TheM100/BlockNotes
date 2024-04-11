import React from "react";
import CardNote from "../../components/cardNote/cardNote";
import NavBar from "../../components/navBar/navBar";


const Home = (() => {
  return (
    <>
    <NavBar></NavBar>
    <div className="mt-20 grid grid-cols-4 gap-2">
    <CardNote/>
    <CardNote/>
    <CardNote/>
    <CardNote/>
    <CardNote/>
    <CardNote/>
    <CardNote/>
    <CardNote/>
    <CardNote/>
    <CardNote/>
    
    </div>
    </>
  )
})

export default Home;