export default function Login() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-6">Iniciar sesión</h2>
        <form action="procesar_login.php" method="POST">
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
        <p className="mt-4">
          ¿No tienes una cuenta?{" "}
          <a href="registro.html" className="text-blue-500">
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
  );
}
