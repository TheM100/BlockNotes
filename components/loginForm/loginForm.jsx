import React from "react";
import {useForm} from 'react-hook-form';


export default function Login(){
    return<>
        <div className="bg-white p-8 rounded shadow-md w-full h-full">
        <h2 className="text-2xl text-center mb-6">Iniciar sesión</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1">
              Nombre de usuario:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full px-4 py-2 border rounded"
             
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