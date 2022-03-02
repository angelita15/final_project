import { useState } from 'react'
import { useEffect } from 'react'
import { useParams, } from 'react-router-dom'
import EventsService from '../../services/events.service'

const EventDetailsPage = () => {


    const [eventDetails, setEventDetails] = useState({})
    const { events_id } = useParams()

    useEffect(() => {

        EventsService
            .getOneEvents(events_id)
            .then(({ data }) => setEventDetails(data))
            .catch(err => console.log(err))

    }, [])
    return (<h1>esta es event  {events_id}</h1>)
}
export default EventDetailsPage