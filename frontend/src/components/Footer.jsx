import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <div className="column">
                    <h3>About</h3>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Flipkart Stories</a></li>
                    </ul>
                </div>
                {/* Repeat for other footer sections */}
            </div>
        </footer>
    );
};

export default Footer;

