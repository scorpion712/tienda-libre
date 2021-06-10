import { PRODUCTS_FETCH_FAIL, PRODUCTS_FETCH_REQUEST, PRODUCTS_FETCH_SUCCESS } from "../types";

export const productReducer = (state={}, action) => {
    switch(action.type) {
        case PRODUCTS_FETCH_REQUEST: 
            return {
                ...state, productList: {loading: true}
            }
        case PRODUCTS_FETCH_SUCCESS: 
            return {
                ...state, // previous state
                productList: {loading: false, products: action.payload}
            }
        case PRODUCTS_FETCH_FAIL: 
            return {
                ...state, // previous state
                productsList: {loading: false, error: action.payload}
            } 
        default: 
            return state;
    }
}