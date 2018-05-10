import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import './ItemPage.css';

const ItemPage = ({ items, onAddToCart }) => {
    return (
        <ul className="ItemPage-items">
        {
            items.map((item) => (
                <li key={item.id} className="ItemPage-item">
                    <Item onAddToCart={ () => onAddToCart(item) } item={item} />
                </li>
            ))
        }
        </ul>
    );
};

ItemPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

export default ItemPage;