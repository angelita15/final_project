import axios from 'axios'

class EventsService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/events` 
        })
    }

    getAllEvents = () => {
        return this.api.get('/getAllEvents')
    }

    getOneEvents = id => {
        return this.api.get(`/getOneEvents/${id}`)

    }

    createEvent = event => {
        return this.api.post(`/createEvents`, event)
    }

    putOneEvents = (id, eventInfo) => {
        return this.api.put(`/getOneEvent/${id}/edit`, eventInfo)
    }


    deleteOneEvents = id => {
        return this.api.delete("/getOneEvent/:event_id/delete")
    }


}

const eventsService = new EventsService()

export default eventsService
