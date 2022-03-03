import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import eventsService from '../../services/events.service'

const NewEventForm = () => {
    const [eventData, setEventData] = useState({

        title: '',
        description: '',
        date: '',
        address: '',
        image: ''

    })

    const { title, description, date, address, image } = eventData

    const handleInputChange = e => {
        const { name, value } = e.target

        setEventData({
            ...eventData,     // "duplico el objeto para que no modifique el estado inicial"
            [name]: value    // con name me traigo el nombre de cada campo 
        })

    }

    const handleSubmit = e => {
        e.preventDefault()

        eventsService
            .saveEvent(eventData)
            .then(({ data }) => console.log(data))
            .catch(err => console.log(err))
    }
    //cada enpont del back es un servicio del front 99%

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label> Nombre </Form.Label>
                <Form.Control type="text" name="title" value={title} onChange={handleInputChange} />

            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label> fecha </Form.Label>
                <Form.Control type="date" name="date" value={date} onChange={handleInputChange} />

            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label> descripcion </Form.Label>
                <Form.Control type="text" name="description" value={description} onChange={handleInputChange} />

            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label> direccion </Form.Label>
                <Form.Control type="text" name="address" value={address} onChange={handleInputChange} />

            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label> imagen  </Form.Label>
                <Form.Control type="url" name="image" value={image} onChange={handleInputChange} />

            </Form.Group>
            
             {/* <Form.Group controlId="eventImage" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file" />
            </Form.Group> */}



            <Button variant="primary" type="submit">
                crear evento
            </Button>
        </Form>

    )

}

export default NewEventForm