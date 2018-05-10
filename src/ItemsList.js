import React from 'react';
import Item from './Item';

const ItemsList = ({ items, onAddToCart }) => (
    <div className="ItemsList">
    { items.map(item => <Item onAddToCart={ () => onAddToCart(item) } key={ item.id } item={ item } />) }
    </div>
);

export default ItemsList