import { useState } from "react"
import Cards from "../../layout/Cards/Cards"
import Sidebar from "./src/Sidebar"
import Historial from "./src/Historial"

export default () => {
    const [page, setPage] = useState()
    return(
        <>
        <Sidebar setPage={setPage}/>
        {page == 1 && <Cards/>}
        {page == 2 && <Historial/>}
        </>
    )
}