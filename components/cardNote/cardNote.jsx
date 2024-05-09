import React from "react";

function CardNote({dataNote}) {
    const {bodyNote,titleNote } = dataNote;
    return (
        <>
            <div className="bg-gray-800  flex flex-col  items-center rounded-lg w-11/12 ">
                <div className="flex flex-col  items-center rounded-lg m-2 h-full gap-2">
                    <h2 className="bg-gray-50 w-11/12 h-4/12">{titleNote}</h2>
                    <p className="bg-gray-50 w-11/12 h-8/12">{bodyNote}</p>
                </div>
                <div className="flex w-4/12 mb-1 gap-1">
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-2 rounded mt-2 w-full">Edit</button>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded mt-2 w-full">Delete</button>
                   
                </div>
            </div>
        </>
    )
}

export default CardNote