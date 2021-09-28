import React, { useContext, useEffect } from 'react'
import { fetchProducts } from '../actions/productsActions';
import { Store } from '../Store';
import { CircularProgress } from '@material-ui/core'

export default function HomeScreen() {
    const { state, dispatch } = useContext(Store); 
    // state products variables
    const {
        products,
        loading: loadingProducts,
        error: errorProduct,
    } = state.productList; 
    // fetching data from backend
    useEffect(() => {
        fetchProducts(dispatch);
    }, [dispatch]);

    return (
        <div>
            {loadingProducts ? 
                <CircularProgress disableShrink />
                : errorProduct ?
                alert("error: "+ errorProduct)
                : (
                    products.map((product) => (
                        <ul key={products._id}>
                            <li> 
                            {product.name}
                            </li>
                        </ul>
                    ))
                )
            } 
        </div>
    )
}
