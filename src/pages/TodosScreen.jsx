import React from 'react'
import { TaskList } from '../componentes/TaskList'
import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const TodosScreen = () => {

  // cerrar secion
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate();

  const onLogout = () => {

    logout();

    navigate('/Home', {
      replace: true
    })

  }



  return (
    <>
      <h1>Bienvenido Pudo Loguearse/Registrarse</h1>
      <TaskList />

      <button type="button" className="btn btn-danger" style={{marginTop: '30px'}} onClick={onLogout} >Cerrar Secion</button>
    </>
  )
}
