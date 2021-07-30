import { useContext } from "react";
import AppContext from "../ContextAPI/AppContext";
import Characters from "./Characters";
import Favorites from "./Favorites";


function Home() {
    const { page } = useContext(AppContext)
    return(
        <>
        <Characters/>
        <Favorites/>
        </>
    )
}

export default Home;