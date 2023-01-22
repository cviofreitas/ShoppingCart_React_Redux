import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useDispatch } from 'react-redux'
import {
    addToCart,
    removeFromCart,
    deleteFromCart
} from '../reduxSetup/actions'


// child components
import CartItemCard from './CartItemCard'
import CartSummary from './CartSummary'
// css
import './ShoppingCart.css'

const ShoppingCart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(store => store.cart, shallowEqual)

    const add = (itemData) => {
        dispatch(
            addToCart(itemData)
        )
    }
    const remove = (itemData) => {
        dispatch(
            removeFromCart(itemData)
        )
    }

    const deleteItem = (itemData) => {
        dispatch(
            deleteFromCart(itemData)
        )
    }
    return (
        <>
            <div className='ShoppingCartContainer'>{cart.length === 0 ?
                <div>
                    <h2>
                        Your cart is empty
                    </h2>
                </div> :
                <>
                    <div className='cartContainer'>
                        <h2>Review Items</h2>
                        {cart?.map(item => <CartItemCard
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                            imageUrl={item.imageUrl}
                            add={add}
                            remove={remove}
                            deleteItem={deleteItem}
                        />)}
                    </div>
                    <CartSummary />
                </>
            }

            </div>

        </>


    )
}

export default ShoppingCart