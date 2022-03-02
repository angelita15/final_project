import axios from 'axios'

class ProductsService {
    constructor() {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_API_URL}/products` })
    }

    getAllProducts = () => {
        return this.api.get('/getAllProducts')
    }

    getOneProducts = id => {
        return this.api.get(`/getOneProduct/:product_id`)

    }

    putOneProducts = id => {
        return this.api.put("/getOneProduct/:product_id/edit")
    }


    deleteOneProducts = id => {
        return this.api.delete("/getOneProduct/:product_id /delete")
    }


}

const productsService = new ProductsService()

export default productsService