import { Container,Button } from 'react-bootstrap'

import {Link} from 'react-router-dom'

const IndexPage = () => {

    
    return (
        <Container>
            <h1> hola a todos </h1>
            <Link to="/getAllEvents"> 
                <Button variant="dark" size='lg'> eventitos </Button> </Link>

        </Container>


    )

}

export default IndexPage;