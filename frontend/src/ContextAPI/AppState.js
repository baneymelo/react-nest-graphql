import { useContext, useState } from "react";
import AppContext from "./AppContext";

function AppState({children}) {

    const [page, setPage] = useState(1)

    const changePage = (newPage) => {
        setPage(newPage)
    }

    return(
        <AppContext.Provider value={{
            page,
            changePage
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppState;