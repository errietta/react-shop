import React from 'react';

const Nav = ({ activeTab, onTabChange }) => (
    <nav className="App-nav">
        <ul>
            <li className={`App-nav-item ${activeTab === "TAB_ITEMS" && "selected"}`}>
                <NavLink tab="TAB_ITEMS" onClick={onTabChange}>Items</NavLink>
            </li>
            <li className={`App-nav-item ${activeTab === "TAB_CART"  && "selected"}`}>
                <NavLink tab="TAB_CART" onClick={onTabChange}>Cart</NavLink>
            </li>
        </ul>
    </nav>
);

class NavLink extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.tab);
    }

    render() {
        return (
            <a onClick={this.handleClick}>
              { this.props.children }
            </a>
        );
    }
}

export default Nav;