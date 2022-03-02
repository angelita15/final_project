import { Row, Col } from 'react-bootstrap'
import ProductCard from '../ProductCard/ProductCard'

const ProductsList = ({ products }) => {
    return (
        <Row>
            {products.map(products => {
                return (
                    <Col md={4} key={products._id}>
                        <ProductCard  {...products} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default ProductsList 