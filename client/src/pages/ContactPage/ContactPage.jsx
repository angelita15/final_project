import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from '../../components/ContactForm/ContactForm'



const ContactPage = () => {

    return (
        <Container>
            <img classNamme="imgLeo" src='../../imagenes/IMG_6840SS.jpg' />

            <Row className="justify-content-md-center">
                <Col md={6}>

        
                    <h3>Contacta con nosotros</h3>
                    <p>Si tienes cualquier duda, o pedido mándanos un e-mail y te respondere lo antes posible</p>
                    <ContactForm />
                </Col>
            </Row>
            <Row className="justify-content-md-center">

                <h2>¿QUIERES TENER NUESTRAS TARTAS EN TU RESTAURANTE?</h2>
                <Col md={6}>
                    <section>
                        hacemos productos artesanales y frescos a diario para distintos clientes, adaptándonos a las necesidades y gustos de cada uno
                        nuestra especilidad son las tartas personalizadas! imaginalo y nostros lo creamos!
                    </section>
                </Col>
                <Col md={6}>
                    <section>
                        Escríbenos: karolinaruedapagina@gmail.com o llámanos: +34 625 22 63 20 
                    </section>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactPage