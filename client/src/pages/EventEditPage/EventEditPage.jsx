//me importo el formulario de edicion y lo pego abaj9  EventEditForm

import { Container } from "react-bootstrap"
import EventEditForm from "../../components/EventEditForm/EventEditForm"
const EventEditPage = () => {
    return (
       <Container> 
            <h1> Editar evento</h1>
         <EventEditForm />
       </Container>

    )
}

export default EventEditPage