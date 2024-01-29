import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { AppContext } from "../components/appContext"
import { LoginUser } from "../pages/login"
import { ContaUser } from "../pages/conta"

const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)

    return(
        <Routes>
            <Route path='/' element={<LoginUser/>} />
            <Route path='/conta/:id' element={ isLoggedIn ? <ContaUser/> : <LoginUser/>} />
        </Routes>
    )
}

export default MainRoutes