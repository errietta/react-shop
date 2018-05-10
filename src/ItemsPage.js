import React from 'react';
import ItemsList from './ItemsList';

import { items } from './static-data.js';

const ItemsPage = ({ onAddToCart }) => (
    <div className='ItemsPage'>
        <ItemsList items={ items } onAddToCart={ onAddToCart } />
    </div>
);

export default ItemsPage;