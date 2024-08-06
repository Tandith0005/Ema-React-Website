import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('products.json').then(res=>res.json()).then(dis=>setProducts(dis));
    } ,[])

    const [cart, setCart] = useState([]);

    const handleAddToCart = (prod) =>{
        // console.log(prod);
        const newCart = [...cart, prod];
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            
            <div className="products-container">
                {
                    products.map(product=> <Product key={product.id} product={product} handleAddToCart={handleAddToCart} ></Product> )
                }
            </div>
            <div className="cart-container">
                <h2>Order summary</h2>
                <p>Selected Items: {cart.length}</p>
            </div>

        </div>
    );
};


export default Shop;