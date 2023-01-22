import React from 'react'

import ItemCard from './ItemCard'
import { useDispatch } from 'react-redux'
import { addToCart } from '../reduxSetup/actions'
import nextId from 'react-id-generator'
import './Catalog.css'
const Catalog = (props) => {
    const { catalog, title, bannerImg } = props
    const dispatch = useDispatch()
    const add = (itemData) => {
        dispatch(
            addToCart(itemData)
        )
    }


    return (
        <div className='CatalogContainer'>
            <div className='CategoryBanner'>
                <img
                    src={bannerImg}
                    alt='banner' />
                <h2>{title}</h2>
            </div>
            <div className='catalog'>
                {
                    catalog.map(({ name, price, description, imageUrl }) =>
                        <ItemCard
                            key={nextId()}
                            name={name}
                            price={price}
                            description={description}
                            imageUrl={imageUrl}
                            add={add}
                        />)
                }
            </div>
        </div>


    )
}

export default Catalog