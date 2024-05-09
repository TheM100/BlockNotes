"use client"
import React from "react"
import { useForm } from "react-hook-form"
import { registerUserFetch } from "@/api/users/route"

export default function RegisterForm() {
    
    const {register, handleSubmit, reset, formState: { errors } } = useForm();
  

  const dataRegister =( async (data)=>{
    console.log(data)
    await registerUserFetch(data)
    reset();  
    
   
  
  })
    return (
        <>
        <div className="w-full h-full rounded-lg bg-white flex flex-col items-center ">
        <h2 className="font-sans text-2xl mb-6">Registrate </h2>
            <form action="" className="flex flex-col items-center" onSubmit={handleSubmit(dataRegister)}>
                <div className=" flex flex-col gap-1 w-96 mb-3">
                    <div className="flex flex-col gap-1">
                        <label className="text-lg">Nombre</label>
                        <input className={`w-full border rounded-lg p-3 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`} type="text" placeholder="" 
                        {...register("firstName", { required: "Este campo es requerido" })} 
                        />
                    </div>
                    {errors.firstName && <small className="text-red-700">{errors.firstName.message}</small>}

                    <div className="flex flex-col gap-1">
                        <label className="text-lg">Apellido</label>
                        <input className={`w-full border rounded-lg p-4${errors.lastName ? 'border-red-500' : 'border-gray-300'}`} type="text" placeholder="" 
                        {...register("lastName", { required: "Este campo es requerido" })} 
                        />
                    </div>
                    {errors.lastName && <small className="text-red-700">{errors.lastName.message}</small>}

                    <div className="flex flex-col gap-1">
                        <label className="text-lg">Correo</label>
                        <input className={`w-full border rounded-lg p-4${errors.email ? 'border-red-500' : 'border-gray-300'}`} type="text" placeholder="" 
                        {...register("email", { required: "Este campo es requerido" })} 
                        />
                    </div>
                    {errors.email && <small className="text-red-700">{errors.email.message}</small>}

                    <div className="flex flex-col gap-1">
                        <label className="text-lg">Contraseña</label>
                        <input className={`w-full border rounded-lg p-4${errors.password ? 'border-red-500' : 'border-gray-300'}`} type="password" placeholder=""
                        {...register("password", { required: "Este campo es requerido", minLength: { value: 8, message: "El password debe tener al menos 8 caracteres" } })} 
                         />
                    </div>
                    {errors.password && <small className="text-red-700">{errors.password.message}</small>}

                    <button type="submit" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2">Crear</button>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-gray-500"> ¿Ya tienes una cuenta?</p>
                    <a href="/login" className="text-blue-500"> Inicia sesion</a>
                </div>
            </form>
        </div>
        </>
    )
}
