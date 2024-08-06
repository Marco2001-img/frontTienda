import { createContext, useState } from 'react'
import { categorias as categoriasDB} from '../data/categorias'

const QuiscoConext = createContext()

const QuiscoProvider = ({children}) => {

    const[categorias, setCategorias] = useState(categoriasDB)
    const[categoriaActual, setcategoriaActual] = useState(categorias[0])
    const[modal, setModal] = useState(false)
    const[producto, setProducto] = useState({})

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setcategoriaActual(categoria)
    }

    const handleClickModal = () =>{
        setModal(!modal)
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    return (
        <QuiscoConext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                handleClickModal,
                modal,
                handleSetProducto,
                producto
            }}

        >{children}</QuiscoConext.Provider>
    )
}

export {
    QuiscoProvider
}

export default QuiscoConext
