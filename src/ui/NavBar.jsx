import { Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';



export const Navbar = () => {
    return (




            <nav className="navbar navbar-expand-lg navbar-dark " id='nav' >

                <Link
                style={{color:"white"}}
                    className="navbar-brand "
                    to="/"
                >
                    Inicio
                </Link>

                <div className="navbar-collapse d-flex justify-content-end  ">
                    <div className="navbar-nav">

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link   ${isActive ? 'active' : ''} `}
                            to="/Login"
                            style={{color:"white"}}
                        >
                            Iniciar Secion
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''} `}
                            to="/Registrarse"
                            style={{color:"white"}}
                        >
                            Registro
                        </NavLink>
                    </div>



                </div>
            </nav>


    )
}