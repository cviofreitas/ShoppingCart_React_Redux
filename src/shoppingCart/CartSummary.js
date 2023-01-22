import React from 'react'
import './CartSummary.css'
import { useSelector, shallowEqual } from 'react-redux'
import useItemTotal from '../helpersFuncs/useItemsTotal';
import useCartTotalPrice from '../helpersFuncs/useCartTotalPrice';
import { Button } from '@mui/material'
var formatterUSD = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: 'USD',
    maximumFractionDigits: 2,
});

const CartSummary = () => {
    const cart = useSelector(store => store.cart, shallowEqual)
    const totalItemsInCart = useItemTotal(cart)
    const cartTotal = useCartTotalPrice(cart)
    const taxRate = .05
    const taxes = (cartTotal * taxRate)
    const orderTotal = (cartTotal + taxes)
    return (
        <div className='CartSummary'>
            <h2>
                Order Summary
            </h2>
            <div className='ExpenseBreakDown'>
                <div className='Summary'>
                    <h3>Items({totalItemsInCart}):</h3>
                    <p>{formatterUSD.format(cartTotal)}</p>
                </div>
                <div className='Summary'>
                    <h3>Shipping & handling:</h3>
                    <p>$0.00</p>
                </div>
                <div className='Summary'>
                    <h3>Total before tax:</h3>
                    <p>{formatterUSD.format(cartTotal)}</p>
                </div>
                <div className='Summary'>
                    <h3>Estimated tax:</h3>
                    <p>{formatterUSD.format(taxes)}</p>
                </div>
                <hr />
                <div className='TotalCost'>
                    <h3>Order total:</h3>
                    <p>{formatterUSD.format(orderTotal)}</p>
                </div>
                <Button
                    className='CheckOut'
                    variant="contained"
                >
                    Proceed to checkout
                </Button>
            </div>
        </div>
    )
}

export default CartSummary