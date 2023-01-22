import { ADD_TO_CART, REMOVE_FROM_CART, DELETE_FROM_CART } from './actionTypes'

export const addToCart = (itemData) => ({ type: ADD_TO_CART, data: itemData });
export const removeFromCart = (itemData) => ({ type: REMOVE_FROM_CART, data: itemData });
export const deleteFromCart = (itemData) => ({ type: DELETE_FROM_CART, data: itemData });