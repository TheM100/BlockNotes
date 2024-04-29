import React from "react";
import { useForm } from "react-hook-form";


export default function NewNote({ open, setOpen, catchData}) {

  const { register, handleSubmit, reset } = useForm()

  const dataNote = ((data)=>{
    console.log(data)
    catchData(data)
    reset()
  })


  return (
    <div
      className={`${
        open ? "w-1/2" : "w-0"
      } bg-cyan-600  max-h-screen fixed top-0 left-1/4 transition-all duration-300  rounded-lg pb-10`}
    >
      <div className={`${!open && "hidden"} pt-3 `}>
        <button className="ml-4 text-white mb-2" onClick={() => setOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className=" flex flex-col justify-center items-center">
          <div className="  w-10/12 flex flex-col  items-center border-dashed border-4 rounded-lg font-sans my-4 ">
            <h2 className="text-xl text-white font-medium">
              Agrega tu nota aqui
            </h2>
            <form className=" flex flex-col m-5 w-full justify-center items-center" onSubmit={handleSubmit(dataNote)}>
              <div className="flex flex-col items-center w-full">
                <label className="text-2xl font-medium ">Título</label>
                <input
                  className="w-10/12 border rounded-lg p-4"
                  type="text"
                  placeholder="New title"
                  {...register("titleNote")}
                />
              </div>
              <div className="flex flex-col items-center w-full">
                <label className="text-lg font-medium">Cuerpo de la nota</label>
                <textarea className="resize-none w-10/12 h-80 border rounded-lg" {...register("bodyNote")}></textarea>
              </div>
              <button
                type="submit"
                class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2"
              >
                Crear
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
