import React from 'react'
import { useState } from 'react'
import './ItemCard.css'
import { Button } from '@mui/material'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const ItemCard = (props) => {
    const { name, price, description, imageUrl } = props
    const [itemQuantity, setQuantity] = useState(1)
    function handleChange(value) {
        if (value < 0) { setQuantity(0) }
        if (value >= 0) { setQuantity(value) }
    }
    return (
        <div className='itemCard'>
            <div className='imageInfoDisplay'>
                <img src={imageUrl} alt={name} />
                <div className='cardInfo'>
                    <h4>{name}</h4>
                    <p className='price'>{'$' + price}</p>
                    <p className='overflow'>{description}</p>
                </div>
            </div>
            <div className='userInput'>
                <label htmlFor='quantity'>QTY</label>
                <input
                    className='QTY'
                    id='quantity'
                    type="number"
                    value={itemQuantity}
                    onChange={(e => handleChange(e.target.value))}
                />

                <Button
                    className='AddButton'
                    variant="contained"
                    endIcon={<ShoppingCartRoundedIcon />}
                    onClick={() => {
                        props.add({
                            name: props.name,
                            price: props.price,
                            description: props.description,
                            imageUrl: props.imageUrl,
                            quantity: +itemQuantity,
                        })
                    }}
                >add to
                </Button>
            </div>


        </div>

    )
}

export default ItemCard