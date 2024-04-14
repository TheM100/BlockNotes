"use client"
import React, { useState } from "react";
import NewNote from "./newnote";

function DropDown() {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className=" bg-gray-50  w-full ml-2 border rounded-lg">

                <button className="flex flex-row justify-around  items-center  w-full font-medium " onClick={() => setOpen(true)}>
                    <span className="text-lg text-cyan-600">New Note!</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>

                <div className={`${!open && "hidden"} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>

                <NewNote open={open} setOpen={() => setOpen()} />


            </div>

        </>
    )
}

export default DropDown;