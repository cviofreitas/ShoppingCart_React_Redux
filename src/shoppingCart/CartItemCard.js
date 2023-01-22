import React from 'react'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './CartItemCard.css'
const CartItemCard = (props) => {

    const { name, price, imageUrl, add, remove, deleteItem, quantity } = props

    return (
        <div className='cartItem'>
            <div className='cartImageDisplay'>
                <img src={imageUrl} alt={name + 'picture'} />
            </div>
            <div className='cartCardInfo'>
                <div>
                    <h4>{name}</h4>
                    <p className='price'>{'$' + price}</p>
                    <div className='cartModifiers'>

                        {/* remove button */}
                        <IconButton
                            aria-label="remove"
                            onClick={() => {
                                remove({
                                    name: props.name,
                                })
                            }}>
                            <RemoveIcon />
                        </IconButton>
                        <p>{quantity}</p>
                        {/* add button */}
                        <IconButton
                            aria-label="add"
                            onClick={() => {
                                add({
                                    name: props.name,
                                    quantity: 1
                                })
                            }}>
                            <AddIcon />
                        </IconButton>



                        {/* delete button */}
                        <IconButton
                            aria-label="delete"
                            onClick={() => {
                                deleteItem({
                                    name: props.name
                                })
                            }}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default CartItemCard
