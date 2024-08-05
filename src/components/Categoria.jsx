import useQuisco from "../hooks/useQuisco"


export default function Categoria({categoria}) {
  
    const {icono, id, nombre} = categoria
    const {handleClickCategoria} = useQuisco()
    return (

      <div className='flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer'>
        <img 
        src={`/img/icono_${icono}.svg`}
        className='w-12' 
        alt="img" 
        />

        <button
        type="button"
        onClick={ () => handleClickCategoria(id)} 
        className='text-lg font-bold cursor-pointer truncate'
        >
          {nombre}
        </button>
      </div>
    
  )
}
