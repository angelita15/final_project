import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const Navigation = () => {
    return (
        <Navbar bg="light" variant='light' expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <NavLink to="/">
                        <Nav className="me-auto">
                            <Nav.Link as="span">Inicio</Nav.Link>
                        </Nav>
                    </NavLink>
                    <Nav className="mx-auto">

                        <NavLink to="/getAllProducts">
                            <Nav.Link as="span">Productos</Nav.Link>
                        </NavLink>
                        <NavLink to="/blog">
                            <Nav.Link as="span">Blog</Nav.Link>
                        </NavLink>
                        <NavLink to="/">
                            <Navbar.Brand as="span">Karolina Rueda Eventos </Navbar.Brand>
                        </NavLink>
                        <NavLink to="/getAllEvents">
                            <Nav.Link as="span">Eventos</Nav.Link>
                        </NavLink>
                        <NavLink to="/contact">
                            <Nav.Link as="span">Contacto</Nav.Link>
                        </NavLink>

                        <NavLink to="/registro">
                            <Nav.Link as="span"> signup</Nav.Link>
                        </NavLink>


                        <NavLink to="/crear">
                            <Nav.Link as="span">Eventos crear  que luego lo borrare</Nav.Link>
                        </NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navigation