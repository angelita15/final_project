import { useState } from 'react'
import { useEffect } from 'react'
import { useParams, } from 'react-router-dom'
import ProductsService from '../../services/products.service'

const ProductDetailsPage = () => {


    const [productsDetails, setproductDetails] = useState({})
    const { products_id } = useParams()

    useEffect(() => {

        ProductsService
            .getOneEvents(products_id)
            .then(({ data }) => setproductDetails(data))
            .catch(err => console.log(err))

    }, [])
    return (<h1>esta el product  {products_id}</h1>)
}
export default ProductDetailsPage