import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="header-top">
                <div className="logo">Flipkart</div>
                <input type="text" className="search-bar" placeholder="Search for products, brands, and more" />
                <div className="login-btn">Login</div>
            </div>
            <nav className="main-nav">
                <ul>
                    <li><a href="#">Electronics</a></li>
                    <li><a href="#">TVs & Appliances</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">Baby & Kids</a></li>
                    <li><a href="#">Home & Furniture</a></li>
                    <li><a href="#">Sports, Books & More</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
