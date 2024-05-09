"use client"
import React from "react";
import {useForm} from 'react-hook-form';
import { loginUserFetch } from "@/api/users/route";
import { useRouter } from 'next/navigation';



export default function Login(){
 
  
  const {register, handleSubmit, reset, formState: { errors } } = useForm();
  const router = useRouter();

  const dataLogin =( async (data)=>{
    console.log(data)
    const result = await loginUserFetch(data);
    if (result.success) {
      reset(); // Asegúrate de que `reset` esté definido o quítalo si no lo usas
      router.push('/'); // Cambia '/ruta-de-destino' por tu ruta específica
    } else {
      console.log('Login fallido o no completado');
    }
    
   
  
  })

    return<>
        <div className="bg-white p-8 rounded shadow-md w-full h-full">
        <h2 className="text-2xl text-center mb-6">Iniciar sesión</h2>
        <form onSubmit={handleSubmit(dataLogin)}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1">
              Correo electronico:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full px-4 py-2 border rounded"
              {...register("email", { required: "Este campo es requerido" })} 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded"
              {...register("password", { required: "Este campo es requerido" })} 
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Iniciar sesión
          </button>
        </form>
        
      </div>

    </>
}