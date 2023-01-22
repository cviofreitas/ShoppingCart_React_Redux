import { React, useState } from 'react'

import { Link } from 'react-router-dom'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useSelector, shallowEqual } from 'react-redux'
import useItemTotal from '../helpersFuncs/useItemsTotal';
import './Navbar.css'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const Navbar = () => {
    const cart = useSelector(store => store.cart, shallowEqual)

    const [category, setCategory] = useState('All Products')
    const totalItemsInCart = useItemTotal(cart)
    return (
        <ul className='NavBar'>
            <li className='homeButton'>
                <Link to='/'>
                    <HomeRoundedIcon style={{ fill: 'white' }} onClick={() => setCategory('All Products')} />
                </Link>
            </li>


            <Stack spacing={1} direction="row" className='CategorySelectors'>
                <Button variant="text" className='MuiButton'>
                    <Link to='/produce' className='NavLinks' onClick={() => setCategory('Produce')}>
                        Produce
                    </Link>
                </Button>
                <Button variant="text" className='MuiButton'>
                    <Link to='/meats' className='NavLinks' onClick={() => setCategory('Meats')}>
                        Meats
                    </Link>
                </Button>
                <Button variant="text" className='MuiButton'>
                    <Link to='/dairy' className='NavLinks' onClick={() => setCategory('Dairy')}>
                        Dairy
                    </Link>
                </Button>
                <Button variant="text" className='MuiButton'>
                    <Link to='/grains' className='NavLinks' onClick={() => setCategory('Grains')}>
                        Grains
                    </Link>
                </Button>
            </Stack>


            <li className='cartButton'>
                <div className='itemCount'>
                    <p>{totalItemsInCart}</p>
                </div>
                <Link to='/cart'>
                    <ShoppingCartRoundedIcon style={{ fill: 'white' }} />
                </Link>
            </li>
        </ul >
    )
}

export default Navbar;