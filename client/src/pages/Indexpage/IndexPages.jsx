import { Container, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import './IndexPage.css'
const { default: ControlledCarousel } = require("../../components/Carousels/Carousels")


const IndexPage = () => {

    return (
        <div className='text-center'>

            <Container>
                <h4> hola a todos </h4>


            </Container>
            <ControlledCarousel />

            <Link to="/getAllEvents">
                <Button variant="outline-primary" className="button" size='lg'> eventitos </Button> </Link>
            {/* <Link to="/getAllProducts">
                <Button variant="dark" size='lg'> productos </Button> </Link>   */}

        </div>
    )
}





export default IndexPage;