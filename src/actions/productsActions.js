import axios from "axios";
import { PRODUCTS_FETCH_FAIL, PRODUCTS_FETCH_REQUEST, PRODUCTS_FETCH_SUCCESS } from "../types";

export const fetchProducts = async (dispatch) => { 
    // dispatch request
    dispatch({type: PRODUCTS_FETCH_REQUEST});
    try {
        // get data from server
        const {data} = await axios.get('/api/products');
        return dispatch({
            type: PRODUCTS_FETCH_SUCCESS,
            payload: data
        });
    } catch (error) {
        return dispatch({
            type: PRODUCTS_FETCH_FAIL,
            payload: error.message
        });
    }
}