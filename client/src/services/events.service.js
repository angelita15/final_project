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

    putOneEvents = id => {
        return this.api.put("/getOneEvent/:event_id/edit")
    }


    deleteOneEvents = id => {
        return this.api.delete("/getOneEvent/:event_id/delete")
    }


}

const eventsService = new EventsService()

export default eventsService
