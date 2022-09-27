import { Navbar } from "./Navbar"
import { Main } from "./Main"
import { About } from "./About"
import { Portfolio } from "./Portfolio"
import { Contact } from "./Contact"
import { Footer } from "./Footer"
import { useEffect, useState } from "react"

export default function ContainerMain () {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        // creamos una función para actualizar el estado con el clientWidth
        const updateWidth = () => {
          const width = document.body.clientWidth
          setWidth(width)
        }
        // actualizaremos el width al montar el componente
        updateWidth()
        // nos suscribimos al evento resize de window
        window.addEventListener("resize", updateWidth)
    
        // devolvemos una función para anular la suscripción al evento
        return () => {
          window.removeEventListener("resize", updateWidth)
        }
    }, [])

    return (
        <>
            <Navbar width={width}></Navbar>
            <Main width={width}></Main>
            <About></About>
            <Portfolio></Portfolio>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}