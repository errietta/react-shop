import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import './ItemPage.css';

const CartPage = ({ items, onRemoveFromCart, onIncreaseQty, onDecreaseQty }) => {
    if (items.length) {
        return (
            <ul className="ItemPage-items">
            {
                items.map((item) => (
                    <li key={item.id} className="CartPage-item">
                        <Item
                            onIncreaseQty={ () => onIncreaseQty(item) }
                            onDecreaseQty={ () => onDecreaseQty(item) }
                            onRemoveFromCart={ () => onRemoveFromCart(item) }
                            item={item}
                        />
                    </li>
                ))
            }
            </ul>
        );
    } else {
        return (
            <ul className="ItemPage-Items">
            <li>None Yet, go buy some stuff</li>
            </ul>
        );
    }
};

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onRemoveFromCart: PropTypes.func.isRequired,
    onIncreaseQty: PropTypes.func.isRequired,
    onDecreaseQty: PropTypes.func.isRequired,
};

export default CartPage;