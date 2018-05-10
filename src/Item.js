import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';

const Item = ({ item, onAddToCart, onRemoveFromCart, onIncreaseQty, onDecreaseQty }) => (
    <div className="Item">
        <div className="Item-left">
            <div className="Item-image" />
            <div className="Item-title">
                { item.name }
            </div>
            <div className="Item-description">
                { item.description }
                { item.qty > 0 && <div>{`Quantity: ${ item.qty }`}</div> }
            </div>
        </div>
        <div className="Item-right">
            <div className="Item-price">
                £ { item.price }
            </div>
            <div className="CartItem-controls">
            {
                onDecreaseQty &&
                <button className="Item-addToCart" onClick={onDecreaseQty} disabled={ item.qty <= 1 && 'disabled' }>-</button>
            }
            { 
                onAddToCart ? <button className="Item-addToCart" onClick={onAddToCart}>Add to cart</button>
                : ( onRemoveFromCart ? <button className='Item-addToCart' onClick={onRemoveFromCart}>Remove</button> : '' )
            }
            {
                onIncreaseQty &&
                <button className="Item-addToCart" onClick={onIncreaseQty}>+</button>
            }
            </div>
        </div>
    </div>
);

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func,
    onRemoveFromCart: PropTypes.func,
    onDecreaseQty: PropTypes.func,
    onIncreaseQty: PropTypes.func
};

export default Item;