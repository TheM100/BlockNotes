import React from "react";

function CardNote() {
    return (
        <>
            <div className="bg-gray-800  flex flex-row  items-center rounded-lg mx-3 sm:w-64 w-40 sm:h-64 h-40">
                <div className="flex flex-col  items-center rounded-lg m-2 h-full ">
                    <h2 className="bg-gray-50 sm:rounded-md rounded-sm w-11/12 sm:w-2/3 mt-3 text-center h-6 text-sm sm:text-base">Titulo de Note que es muy largo</h2>
                    <p className="bg-gray-50 sm:rounded-md rounded-sm w-11/12 my-3 overflow-hidden sm:p-2 p-1 text-sm sm:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum neque aperiam in provident sed quos placeat, magnam cupiditate quia accusamus, molestias asperiores corporis omnis excepturi! Pariatur labore quam at ex. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum neque aperiam in provident sed quos placeat, magnam cupiditate quia accusamus, molestias asperiores corporis omnis excepturi! Pariatur labore quam at ex. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum neque aperiam in provident sed quos placeat, magnam cupiditate quia accusamus, molestias asperiores corporis omnis excepturi! Pariatur labore quam at ex.</p>
                </div>
                <div className=" h-40 w-2/12">
                    {/* <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-2 rounded mt-2 w-full">Edit</button>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-2 rounded mt-2 w-full">Delete</button>
           */}
                </div>
            </div>
        </>
    )
}

export default CardNote