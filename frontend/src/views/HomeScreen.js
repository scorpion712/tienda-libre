import React, { useContext, useEffect } from 'react'
import { fetchProducts } from '../actions/productsActions';
import { Store } from '../Store';

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
                console.log("do something while loading products...")
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
