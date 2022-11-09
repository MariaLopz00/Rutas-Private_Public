import {  Route, Routes, Navigate } from "react-router-dom"
import { Login } from "../pages/Login"
import { PublicRoutes } from "./PublicRoutes"
import { Register } from '../pages/Register';
import { TodosScreen } from '../pages/TodosScreen';
import { Navbar } from '../ui/NavBar';
import { PrivateRoutes } from "./PrivateRoutes";



export const AppRouter = () => {

  return (
    <>

        <Navbar/>

        <Routes>

            <Route path="Registrarse" element={<Register />} />
            <Route path="Login" element={<Login/>} />
            <Route path="TodosScreen" element={<TodosScreen />} />
            <Route path="/" element={<Navigate to="/Login" />} />

            {/* ----------Rutas publicas------------ */}
            <Route path="/Login" element={
              <PublicRoutes>
                <Login />
              </PublicRoutes>
            } >
            </Route>



            {/* ---------Rutas Privadas-------- */}
            <Route path='/*' element={ 
                <PrivateRoutes>
                  <TodosScreen />
                </PrivateRoutes>  
              } >
            </Route>
           

        </Routes>
    </>
  )
}
