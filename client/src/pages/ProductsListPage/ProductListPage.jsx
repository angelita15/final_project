
import { useState, useEffect } from "react"
import productsService from '../../services/products.service'
import { Container } from 'react-bootstrap'
import ProductList from "../../components/ProductList/ProductList"


const ProductListPage = () => {

    let [products, setProducts] = useState([])

    useEffect(() => {
    
        productsService
            .getAllProducts()
            .then(({ data }) => setProducts(data))
            .catch(err => console.log(err))


    }, [])

    return (
        <Container>
            <h1> aqui van estar mis productos</h1>
            <ProductList Products={products} />
        </Container>


    )

}

export default ProductListPage;