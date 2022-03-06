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
                         
                        ¿tienes alguna pregunta ? quieres hacer un pedido?
                       
                    </section>
                </Col>
                <Col md={6}>
                    <section>
                        hacemos postres artesanales y frescos a diario para distintos clientes, adaptándonos a las necesidades y gustos de cada uno.

                        Escríbenos: info@Karolina.com o llámanos: +34 687 693 563
                    </section>
                </Col>
            </Row>
        </Container>
    )
}

export default ContactPage