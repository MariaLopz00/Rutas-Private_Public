import React from 'react'
import { FormRegister } from '../componentes/FormRegister'
// Diseñar el formulario de inicio de sesión y programar los eventos de formulario
// Como así también el envío de los datos al servidor
export const Register = () => {
  return (
    <>
    <h1 style={{fontFamily:'monospace', textAlign: 'center', marginTop: '20px'}} >Registrarse</h1>

    <FormRegister />

    </>
  )
}
