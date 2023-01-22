import { ADD_TO_CART, REMOVE_FROM_CART, DELETE_FROM_CART } from "./actionTypes"


const INITITIAL_STATE = {
    cart: [

    ]
}
const rootReducer = (state = INITITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const { cart } = state
            const newItem = action.data
            // if item exists in cart, updated item's quantity
            if (cart.some((item) => item.name === newItem.name)) {
                const newCart = cart.map((item) =>
                    item.name === newItem.name
                        ? {
                            ...item,
                            quantity: item.quantity + newItem.quantity,
                            total: item.quantity * item.price
                        }
                        : item
                );
                return {
                    ...state,
                    cart: newCart,
                };
            }
            // else return updated cart with new item 
            return {
                ...state,
                cart: [...cart, newItem]
            }
        }
        case REMOVE_FROM_CART: {
            const { cart } = state;
            const removedItem = action.data
            // subtract
            const updatedCart = cart.map((item) =>
                item.name === removedItem.name ? {
                    ...item,
                    quantity: item.quantity -= 1
                } : item
            ).filter(item => item.quantity !== 0)
            return {
                ...state,
                cart: updatedCart,
            };
        }

        case DELETE_FROM_CART: {
            const { cart } = state;
            const deletedItem = action.data
            const updatedCart = cart.filter((item) =>
                item.name !== deletedItem.name
            )
            return {
                ...state,
                cart: updatedCart,
            };
        }
        default:
            return state

    }

}

export default rootReducer;