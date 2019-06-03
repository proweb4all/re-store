import React from 'react';
import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className='shop-header row'>
            <a className='logo text-dark' href='#'>Restore</a>
            <a className='shopping-cart'>
                <i className='cart-icon fa fa-shopping-cart' />
                {numItems} item (${total})
            </a>
        </header>
    )
};

export default ShopHeader;