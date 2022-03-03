import { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import eventsService from '../../services/events.service'


const EventDetailsPage = () => {
    const [eventDetails, setEventDetails] = useState({})
    const [loading, setLoading] = useState(true)
    const { events_id } = useParams()

    useEffect(() => {
        loadEvent()
    }, [])

    const loadEvent = () => {
        eventsService
            .getOneEvents(events_id)
            .then(({ data }) => {
                setEventDetails(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                loading
                    ? <h1>Cargando</h1>
                    : <Container className='hero'>
                        <h2> Detalles de {eventDetails.title} </h2>
                        <Row className="d-flex justify-content-center aling-items-center">
                            <Col md={4}>
                                <h4> Informacion </h4>
                                <p> {eventDetails.description}</p>

                                <h4> detalles </h4>
                                <p> fecha {eventDetails.date} </p>
                                <p> direccion {eventDetails.address.street.streetName}
                                    {eventDetails.address.street.streetNumber}
                                    {eventDetails.address.city}
                                    {eventDetails.address.postCode} </p>
                            </Col>
                            <Col md={6}>
                                <img style={{ width: '75%' }} src={eventDetails.image} alt={eventDetails.title} />
                            </Col>
                            <Link to="/getAllEvents">
                                <Button variant="outline-primary" size='lg'> volver a todos los eventitos </Button>
                            </Link>
                        </Row>
                    </Container>
            }
        </>

    )
}
export default EventDetailsPage