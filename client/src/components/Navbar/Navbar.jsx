import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navigation = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='nav mx-auto'>
                        <NavLink to="/">
                            <Nav.Link as="span">Inicio</Nav.Link>
                        </NavLink>
                        <NavLink to="/getAllProducts">
                            <Nav.Link as="span">Productos</Nav.Link>
                        </NavLink>
                        <NavLink to="/blog">
                            <Nav.Link as="span">Blog</Nav.Link>
                        </NavLink>
                        <NavLink to="/">
                            <img src='../imagenes/logo.png' />
                        </NavLink>
                        <NavLink to="/getAllEvents">
                            <Nav.Link as="span">Eventos</Nav.Link>
                        </NavLink>
                        <NavLink to="/contact">
                            <Nav.Link as="span">Contacto</Nav.Link>
                        </NavLink>

                        {/* <NavLink to="/registro">
                            <Nav.Link as="span"> registrarse </Nav.Link>
                        </NavLink>

                        <NavLink to="/inicioSesion">
                            <Nav.Link as="span"> inicio sesion karolina </Nav.Link>
                        </NavLink> */}


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigation