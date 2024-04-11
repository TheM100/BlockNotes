"use client"

export default function registerForm() {
    return (
        <>
            <form action="">
                <div className=" flex flex-col gap-3 w-96 mb-3">
                    <div className="flex flex-col gap-1">
                        <label className="text-lg">Nombre</label>
                        <input className="w-full border rounded-lg p-3" type="text" placeholder="" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-lg">Apellido</label>
                        <input className="w-full border rounded-lg p-4" type="text" placeholder="" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-lg">Correo</label>
                        <input className="w-full border rounded-lg p-4" type="text" placeholder="" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-lg">Contraseña</label>
                        <input className="w-full border rounded-lg p-4" type="password" placeholder="" />
                    </div>
                    <button type="button" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-2">Crear</button>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-gray-500"> ¿Ya tienes una cuenta?</p>
                    <a href="/login" className="text-blue-500"> Inicia sesion</a>
                </div>
            </form>
        </>
    )
}
