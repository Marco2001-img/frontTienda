import {useState} from 'react'
import useQuisco from '../hooks/useQuisco'
import Producto from './Producto'
import { formatearDinero } from "../helpers"

export default function ModalProducto() {

   const{handleClickModal,producto}=  useQuisco()
   const [cantidad, setCantidad] = useState(1)
  
   return (
    <>
        <div className='md:flex gap-10'>
            <div className='md:w-1/3'>
            <img 
            src={`/img/${producto.imagen}.jpg`} 
            alt="img" 
            />
            </div>
            <div className='md:w-2/3'>
            <div className='flex justify-end'>
                <button
                onClick={handleClickModal}
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                </button>
            </div>

            <h1 className='text-3xl font-bold mt-5'>{producto.nombre}</h1>
            <p className='mt-5 font-black text-5xl text-amber-500'>
            {formatearDinero (producto.precio)}
            </p>
           
            <div className='flex gap-4 mt-5'> 

            <button
            onClick={()=> {
                if(cantidad >=5 ) return
                setCantidad(cantidad+1)
            }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </button>

            <p className='text-3xl' >{cantidad}</p>

            <button
            onClick={()=>{
                if(cantidad<=1)return
                setCantidad(cantidad-1)

            }}
            >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </button>

            </div>
        
            <button
            type='button'
            className='bg-indigo-500 hover:bg-indigo-800 px-5  py-2 mt-5 text-white font-bold uppercase rounded'
            >
                Añadir al pedido
            </button>

        </div>
        </div>
    </>
  )
}
