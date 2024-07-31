import { Link } from "react-router-dom";


export default function Registro() {
  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form>
            <div className="mb-4">
              <label 
              className="text-slate-800"
              htmlFor="name"
              >Nombre:</label>

              <input 
              type="text" 
              id="name"
              className="mt-2 block p-3 bg-gray-50 w-full"
              name="name"
              placeholder="Tu nombre"
              />
            </div>

            <div className="mb-4">
              <label 
              className="text-slate-800"
              htmlFor="email"
              >Email:</label>

              <input 
              type="email" 
              id="email"
              className="mt-2 block p-3 bg-gray-50 w-full"
              name="email"
              placeholder="Tu email"
              />
            </div>

            <div className="mb-4">
              <label 
              className="text-slate-800"
              htmlFor="password"
              >Contarseña:</label>

              <input 
              type="password" 
              id="password"
              className="mt-2 block p-3 bg-gray-50 w-full"
              name="password"
              placeholder="Tu contarseña"
              />
            </div>

            <div className="mb-4">
              <label 
              className="text-slate-800"
              htmlFor="password_confirmation"
              >Repetir Contarseña:</label>

              <input 
              type="password" 
              id="password_confirmation"
              className="mt-2 block p-3 bg-gray-50 w-full"
              name="password_confirmation"
              placeholder="Repetir contarseña"
              />
            </div>

            <input 
            type="submit"
            value='Crear Cuenta'
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 
            uppercase font-bold cursor-pointer" 
            />
        </form>
      </div>

      <nav className='mt-5'>
      <Link to="/auth/login">
          ¿tienes cuenta? Inicia Sesion
      </Link>
    </nav>

    </>
  )
}
