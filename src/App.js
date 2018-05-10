import React from 'react';
import Nav from './Nav';

import ItemPage from './ItemPage';
import CartPage from './CartPage';

import { items } from './static-data.js';
import './App.css';

class App extends React.Component {
  state = {
    activeTab: "TAB_ITEMS",
    cart: { }
  };

  sumCartItems = () => Object.values(this.state.cart).reduce((a,b) => ( (a||0) + (b||0) ), 0);

  handleAddToCart = (item) => {
    console.log("add to cart", item);
    this.setState({
      cart: { ...this.state.cart, [item.id]: ( this.state.cart[item.id] || 0 ) + 1 }
    });
  };

  handleRemoveFromCart = (item) => {
    console.log("remove from cart", item);
    this.setState({
      cart: { ...this.state.cart, [item.id]: undefined }
    });
  }

  handleIncreaseQty = this.handleAddToCart;

  handleDecreaseQty = (item) => {
    console.log("decrease", item);
    this.setState({
      cart: { ...this.state.cart, [item.id]: ( this.state.cart[item.id] || 1 ) - 1 }
    });
  };

  handleTabChange = (tab) => {
    this.setState({
      activeTab: tab
    });
  };

  filterCartItems = () => {
    
    let matching = items.filter ( item => this.state.cart[item.id] !== undefined )
    .map( item => ( { ...item, qty: this.state.cart[item.id] } ) );
    console.log(matching);

    return matching;
  }

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case "TAB_ITEMS":
      return <ItemPage items={items} onAddToCart={ this.handleAddToCart } />;
      case "TAB_CART":
      return <CartPage
        onIncreaseQty={ this.handleIncreaseQty }
        onDecreaseQty={ this.handleDecreaseQty }
        onRemoveFromCart={ this.handleRemoveFromCart }
        items={ this.filterCartItems() }
        />;
    }
  }

  render() {
    return (
      <div className="App">
        <Nav activeTab={this.state.activeTab} onTabChange={this.handleTabChange} />
        <main className='App-content'>
          Items in cart: { this.sumCartItems() }
          { this.renderContent() }
        </main>
      </div>
    );
  }
}

export default App;