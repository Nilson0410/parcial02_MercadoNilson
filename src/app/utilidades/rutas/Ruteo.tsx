import { Routes, Route } from "react-router-dom"
import { Inicio } from "../../componentes/contenedor/Inicio"
import { ConciertoCrear } from "../../componentes/conciertos/ConciertoCrear"
import { ConciertoAdmin } from "../../componentes/conciertos/ConciertoAdmin"
import { ConciertoListar } from "../../componentes/conciertos/ConciertoListar"
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado"

export const Ruteo =() => {
    return(
        <>
        <Routes>
            <Route path="/" element={<Inicio/>}/>

            <Route path="/concicre" element={<ConciertoCrear/>}/>
            <Route path="/conciadm" element={<ConciertoAdmin/>}/>
            <Route path="/concilist" element={<ConciertoListar/>}/>

            <Route path="*" element={<NoEncontrado/>}/>

        </Routes>
        </>
    )
}