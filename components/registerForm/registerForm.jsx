"use client"

export default function registerForm() {
    return (
        <>
            <form action="">
                <div className="w-full">
                    <label className="text-2xl">Nombre</label>
                    <input className="w-10/12 border rounded-lg p-4" type="text" placeholder="here" />
                </div>
                <div className="w-full">
                    <label className="text-2xl">Apellido</label>
                    <input className="w-10/12 border rounded-lg p-4" type="text" placeholder="here" />
                </div>
                <div className="flex flex-col items-center w-full">
                    <label className="text-2xl">Correo</label>
                    <input className="w-10/12 border rounded-lg p-4" type="text" placeholder="here" />
                </div>
                <div className="flex flex-col items-center w-full">
                    <label className="text-2xl">Contraseña</label>
                    <input className="w-10/12 border rounded-lg p-4" type="password" placeholder="here" />
                </div>
                <button type="button" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2">Crear</button>
                <div>
                    <p>Ya tienes cuenta?</p>
                    <a href="/login">Inicia sesion</a>
                </div>
            </form>
        </>
    )
}
