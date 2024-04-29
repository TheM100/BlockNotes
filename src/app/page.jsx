"use client"
import React , {useState, useEffect} from "react";
import CardNote from "../../components/cardNote/cardNote";
import NavBar from "../../components/navBar/navBar";


const Home = (() => {
  const [noteContent, setNoteContent] = useState({});
  const [arrayNotes, setArrayNotes] = useState([]);

    const dataNote =  (data) => {
        console.log(data)
         setNoteContent(data);
         
    }
    useEffect(() => {
      if (Object.keys(noteContent).length !== 0) {
          setArrayNotes(prevNotes => [...prevNotes, noteContent]);
          setNoteContent({}); // Limpiar noteContent después de agregarlo al array
      }
  }, [noteContent]);

  useEffect(() => {
      console.log(arrayNotes); // Esto imprimirá el nuevo valor de arrayNotes después de su actualización.
  }, [arrayNotes]);
  
  return (
    <>
      <NavBar catchDataHome={dataNote} />
    
      <div className="flex  pt-20 justify-around ">
        <h3>My notes</h3>
        <h3>Shared with me</h3>
      </div>
      <hr className="my-4 border-gray-300 w-full " />
      <div className="mt-10 grid lg:grid-cols-4  sm:grid-cols-2 grid-cols-3   gap-y-6 gap-x-6 justify-items-center ">
      {arrayNotes.map((note, index) => (
                    <CardNote key={index} dataNote={note} />
                ))}

      </div>
    </>
  )
})

export default Home;