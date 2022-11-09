import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext' 




export const FormLogin= ()=> {
 
  
  //logica Login
  const opciones= {
    method:'POST',
    headers:{'Content-Type':'application/json'}
  }

  //Metedo para la redirection
  const [estado, setEstado]= useState({
    email:"",
    password:""
  });

  const { email, password }=estado;
  const handleInput= ({target})=> {
    setEstado({
     ...estado,
     [target.name]:target.value
    })
    
    // console.log(target.value);
  }


  const {login}= useContext(AuthContext)
  const navigate= useNavigate();
  const onLogin= (datos)=>{
    
    login(datos);
    
    navigate('/Jovenes',{
      replace:true
    })
    
  }
  
  //--------------------------------
  const handleSubmit= (e)=> {
    e.preventDefault();
    
    
    
    
    (async()=>{

      opciones.body= JSON.stringify({email,password})

      // console.log(opciones)
      
      const resp= await fetch('http://localhost:3000/login',opciones);
      
      
      if(!resp.ok) return alert('Revise las credenciales y vuelva a intentarlo');
      

      const data= await resp.json()
      // console.log(data);
      const token= data.token;
      if(token){

        localStorage.setItem('x-token',token);

        // console.log(localStorage)

      }

      // console.log(token)


      
      onLogin(estado)
      
      

      
    })()
   
    
  }

  

//=====================================================================================


  return (
    <>
    
    <div id="formLogin"  className="card mx-auto ">
  <div className="card-body">
    

         <Form >
            <Form.Group classNameName="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label>Correo Electronico</Form.Label>
              <Form.Control name="email" onChange={handleInput}   type="email" placeholder="ejemplo@mail.com"  />
            </Form.Group>
            <Form.Group classNameName="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Contraseña</Form.Label>
           <Form.Control name="password" onChange={handleInput}   type="text" placeholder="Contraseña"  />
           </Form.Group>

           {/* <Button type='submit' onClick={onLogin} >login</Button> */}
          <Button id="boton"  variant="primary" type="submit" onClick={handleSubmit} >
            <Link classNameName="Navbar-brand" style={{color:'white'}}
            to="/todo">Enviar</Link>
          </Button>
          </Form>        
   

            {/*<Link 
                className="navbar-brand " 
                to="/Jovenes"
                >
                Enviar
              </Link>*/}
        
          
       
              </div>
            </div>
    </>
  );
}