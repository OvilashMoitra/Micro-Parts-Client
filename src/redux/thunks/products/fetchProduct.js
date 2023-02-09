import { allProduct } from "../../actiontypes/actiontype"

const fetchProduct = () => {
    return async(dispatch,getState) => {
        const getProduct = await fetch('https://micropart-server.onrender.com/products')
        const product = await getProduct.json()
        console.log(product)
        dispatch({type:allProduct,payload:product})
    }
}

export default fetchProduct;