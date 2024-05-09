"use client"
import React , {useState, useEffect} from "react";
import CardNote from "../../components/cardNote/cardNote";
import NavBar from "../../components/navBar/navBar";
import { getNotesFetch } from "@/api/notes/route";


const Home = (() => {
  const [noteContent, setNoteContent] = useState({}); //
  const [arrayNotes, setArrayNotes] = useState([]);
  const [arrayNotesDB, setArrayNotesDB] = useState([]);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dataNote =  (data) => {
          console.log(data)
         setNoteContent(data);     
    }

    useEffect(() => {
      const token = localStorage.getItem('jwtToken');
      if (token) {
        setIsLoggedIn(true); 
        const fetchData = async () => {
          try {
            const notes = await getNotesFetch(); // Espera a que getNotesFetch() termine y obtiene las notas
            setArrayNotesDB(notes.data); // Actualiza el estado con las notas recibidas  
          } catch (error) {
            console.error('Error al obtener las notas:', error);
          }
        };
        fetchData();
      } else {
        setIsLoggedIn(false); // Si no hay un token, el usuario no está autenticado
      }
    }, []);

    useEffect(() => {// Recuperar el username del localStorage
      const savedUsername = localStorage.getItem("email");
        if (savedUsername) {
          setUsername(savedUsername);
        }
    }, []);

    useEffect(() => {
      if (Object.keys(noteContent).length !== 0) {
          setArrayNotes(prevNotes => [...prevNotes, noteContent]);
          setNoteContent({}); // Limpiar noteContent después de agregarlo al array
      }
  }, [noteContent]);

  useEffect(() => {
      console.log(arrayNotes); // Esto imprimirá el nuevo valor de arrayNotes después de su actualización.
  }, [arrayNotes]);

  useEffect(() => {
    
    console.log(arrayNotesDB)
}, [arrayNotesDB]);
  
  return (
    <>
      <NavBar catchDataHome={dataNote} />
    
      <div className="flex  pt-20 justify-around ">
        <h3>My notes</h3>
        {isLoggedIn && <h1 className="text-3xl text-gray-800">Bienvenido: {username}</h1>}
        <h3>Shared with me</h3>
      </div>
      <hr className="my-4 border-gray-300 w-full " />
      
      <div className="  mt-10 grid lg:grid-cols-4  sm:grid-cols-2 grid-cols-3   gap-y-6 gap-x-6 justify-items-center ">
      {isLoggedIn ?   arrayNotesDB.map((note, index) => (
                  <CardNote key={index} dataNote={note} />
              )) : arrayNotes.map((note, index) => (
                <CardNote key={index} dataNote={note} />
            )) }

      </div>
    </>
  )
})

export default Home;