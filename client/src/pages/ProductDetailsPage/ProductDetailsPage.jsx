import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import productsService from '../../services/products.service'


const ProductDetailsPage = () => {
    const [productDetails, setProductDetails] = useState({})
    const [loading, setLoading] = useState(true)
    const { products_id } = useParams()

    useEffect(() => {
        loadEvent()
    }, [])

    const loadEvent = () => {
        productsService
            .getOneEvents(products_id)
            .then(({ data }) => {
                setProductDetails(data)
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
                        <h2> Detalles de {productDetails.title} </h2>
                        <Row className="d-flex justify-content-center aling-items-center">
                            <Col md={4}>
                                <h4> Informacion </h4>
                                <p> {productDetails.description}</p>

                                <h4> detalles </h4>
                                <p> precio {productDetails.price} </p>
                                <p> tipo {productDetails.type} </p>
                                <p> tamaño {productDetails.size} </p>
                                
                            </Col>
                            <Col md={6}>
                                <img style={{ width: '75%' }} src={productDetails.images} alt={productDetails.title} />
                            </Col>
                        
                        </Row>
                    </Container>
            }
        </>

    )
}
export default ProductDetailsPage