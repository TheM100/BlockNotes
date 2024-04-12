import React from "react";
import CardNote from "../../components/cardNote/cardNote";
import NavBar from "../../components/navBar/navBar";


const Home = (() => {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex  pt-20 justify-around ">
        <h3>My notes</h3>
        <h3>Shared with me</h3>
      </div>
      <hr className="my-4 border-gray-300 w-full " />
      <div className="mt-10 grid lg:grid-cols-4  sm:grid-cols-2 grid-cols-3   gap-y-6 gap-x-6 justify-items-center ">
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />
        <CardNote />

      </div>
    </>
  )
})

export default Home;