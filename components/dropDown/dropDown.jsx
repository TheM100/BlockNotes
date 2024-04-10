"use client"
import React, {useState} from "react";

function DropDown(){
    const [open, setOpen] = useState(false)
    return(
        <>
    <div className=" bg-gray-50  w-full ml-2 border rounded-lg">
        
       <button className="flex justify-around  " onClick={() => setOpen(true)}>
            <span>Add new Note!</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
       </button>
       
       <div className={`${!open && "hidden"} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`} onClick={() => setOpen(false)}></div>

        <div className={`${open ? "w-1/3" : "w-0"} bg-cyan-600 max-h-screen w-1/3 fixed top-0 left-0 transition-all duration-300  rounded-lg`}>
            <div className={`${!open && "hidden"} pt-3 `}>
                <button className='ml-4 text-white mb-2' onClick={() => setOpen(false)} >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
                    <div className=" flex flex-col justify-center items-center">
                        <div className="  w-2/3 flex flex-col  items-center border-4 rounded-lg font-sans my-4 ">
                            <h2 className="text-xl text-white">Agrega tu nota aqui</h2>
                            <form className=" flex flex-col m-5 w-full justify-center items-center" >
                                <div className="flex flex-col items-center w-full">
                                    <label className="text-2xl">Titulo</label>
                                    <input className="w-10/12 border rounded-lg p-4" type="text" placeholder="here" />
                                </div>
                                <div className="flex flex-col items-center w-full">
                                    <label className="text-lg">Cuerpo de la nota</label>
                                    <textarea className="resize-none w-10/12 h-80 border rounded-lg"></textarea>
                                </div>
                                <button type="button" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2">Crear</button>

                            </form>
                        </div>
                    </div>
            </div>
            
        </div>

    </div>

        </>
    )
}

export default DropDown;