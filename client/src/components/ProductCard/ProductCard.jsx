
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductsCard = ({ title, price, size, type, description, images }) => { 
    return (
        <Card className='ProductsCard'>
            <Card.Img variant="top" src={images} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {/* <Link to={`/detalles/${_id}`}>
                   
                    <Button variant="primary"> ver detalles del producto </Button>
                </Link> */}
            </Card.Body>
        </Card>

    )
}

export default ProductsCard