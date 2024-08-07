import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

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
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};


export default Shop;