import { formatearDinero } from "../helpers"
import useQuisco from "../hooks/useQuisco"

export default function Producto({producto}) {

    const {nombre,precio,imagen} = producto
    const {handleClickModal,handleSetProducto} = useQuisco()
  
    return (
    <div className='border p-3 shadow bg-white'>
        <img 
        src={`/img/${imagen}.jpg`} 
        className='w-full'
        alt="img" 
        />

        <div className='p-5'>
            <h3 className='text-2xl font-bold'>{nombre}</h3>
            <p className='mt-5 font-black text-4xl text-amber-500'>{formatearDinero(precio)}</p>
        </div>

        <button
        className="bg-indigo-600
         hover:bg-indigo-800
          text-white w-full mt-5 p-5 
          uppercase font-bold"
        onClick={() => {
            handleClickModal()
            handleSetProducto(producto)
        }}

        >
            Agregar Producto
        </button>
      
    </div>
  )
}
