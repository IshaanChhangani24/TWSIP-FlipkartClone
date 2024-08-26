import React from 'react';

const Products = () => {
    return (
        <section className="products">
            <h2>Featured Products</h2>
            <div className="product-grid">
                {/* Map through product items here */}
                <div className="product-card">
                    <img src="https://cdn.pixabay.com/photo/2016/11/19/12/37/knives-1839061_1280.jpg" alt="Kitchen Set" />
                    <h3>Kitchen Set</h3>
                    <p>$150</p>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    <img src="https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_640.jpg" alt="Kitchen Set" />
                    <h3>Shoes</h3>
                    <p>$130</p>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    <img src="https://cdn.pixabay.com/photo/2019/10/18/07/28/eye-shadow-4558443_640.jpg" alt="Kitchen Set" />
                    <h3>MakeUp</h3>
                    <p>$160</p>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    <img src="https://cdn.pixabay.com/photo/2013/07/18/10/56/dress-163552_640.jpg" alt="Kitchen Set" />
                    <h3>Dress</h3>
                    <p>$190</p>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    <img src="https://cdn.pixabay.com/photo/2017/01/19/04/38/fragrance-1991531_1280.jpg" alt="Kitchen Set" />
                    <h3>Perfumes</h3>
                    <p>$250</p>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    <img src="https://cdn.pixabay.com/photo/2018/11/28/14/04/spray-3843769_1280.jpg" alt="Kitchen Set" />
                    <h3>Deo-Spray</h3>
                    <p>$150</p>                                     
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    <img src="https://cdn.pixabay.com/photo/2018/04/03/23/04/woman-3288365_640.jpg" alt="Kitchen Set" />
                    <h3>Shampoo</h3>
                    <p>$130</p>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    <img src="https://cdn.pixabay.com/photo/2016/07/11/15/45/soap-1509963_640.jpg" alt="Kitchen Set" />
                    <h3>Soaps</h3>
                    <p>$160</p>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    <img src="https://cdn.pixabay.com/photo/2016/11/19/12/37/knives-1839061_1280.jpg" alt="Kitchen Set" />
                    <h3>Kitchen-Set</h3>
                    <p>$280</p>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    <img src="https://cdn.pixabay.com/photo/2018/01/24/15/08/live-3104077_640.jpg" alt="Kitchen Set" />
                    <h3>Bed</h3>
                    <p>$550</p>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    <img src="https://cdn.pixabay.com/photo/2017/06/19/10/24/indoor-2418846_640.jpg" alt="Kitchen Set" />
                    <h3>Curtians</h3>
                    <p>$150</p>
                    <button>Add to Cart</button>
                </div>

                <div className="product-card">
                    <img src="https://cdn.pixabay.com/photo/2012/11/19/07/09/ring-66598_1280.jpg" alt="Kitchen Set" />
                    <h3>Jwelleries</h3>
                    <p>$150</p>
                    <button>Add to Cart</button>
                </div>
               
            </div>
        </section>
    );
};

export default Products;
