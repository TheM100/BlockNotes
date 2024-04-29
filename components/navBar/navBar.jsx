"use client"
import React from "react";
import DropDown from "../dropDown/dropDown";
import { useState, useEffect } from "react";

function NavBar({catchDataHome}) {
    // {catchData}
    // const [noteContent, setNoteContent] = useState({});

    // useEffect(() => {
    //     console.log(noteContent); // Esto se ejecutará después de que noteContent haya sido actualizado.
    //     if (Object.keys(noteContent).length !== 0) {
    //         catchData(noteContent);
    //     }
    // }, [noteContent]);

    const dataNote =  (data) => {
        // setNoteContent(data);
        console.log(data)
         catchDataHome(data)
    }
    return (
        <>
            <nav className="bg-gray-800 fixed h-16  left-0 right-0 top-0 shadow-md">
                <div className="h-full flex justify-between items-center mx-auto   lg:max-w-7xl">

                    <div className="min-w-6">
                        <DropDown catchDataNav={dataNote} /> 
                        {/* catchDataNav={dataNote} */}
                    </div>
                    <input type="text" className="w-4/12 p-1 rounded-lg items-center" placeholder="Buscar..." />
                    <button href="/login-register" className="mr-4 bg-white p-1 rounded-lg text-lg text-cyan-600 font-medium"><a href="/login-register" >Iniciar sesion</a></button>
                </div>
            </nav>
        </>
    )
}

export default NavBar;