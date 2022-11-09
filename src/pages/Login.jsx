import React from 'react'
import { FormLogin } from '../componentes/FormLogin';
// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Login = () => {
  return (
    <>
    
    <h1 style={{fontFamily:'monospace', textAlign: 'center', marginTop: '20px'}} >Iniciar secion</h1>
    <FormLogin/> 
    </>
  )
}
