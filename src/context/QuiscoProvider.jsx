import { createContext, useState } from 'react'
import { categorias as categoriasDB} from '../data/categorias'

const QuiscoConext = createContext()

const QuiscoProvider = ({children}) => {

    const[categorias, setCategorias] = useState(categoriasDB)
    const[categoriaActual, setcategoriaActual] = useState(categorias[0])

    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setcategoriaActual(categoria)
    }

    return (
        <QuiscoConext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria
            }}

        >{children}</QuiscoConext.Provider>
    )
}

export {
    QuiscoProvider
}

export default QuiscoConext
