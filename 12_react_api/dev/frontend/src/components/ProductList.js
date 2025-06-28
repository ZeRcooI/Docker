import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8005/api/v1/products/')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the products!', error);
            });
    }, []);

    const nextProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    if (products.length === 0) return <div>Данные не получены</div>;

    const product = products[currentIndex];

    const buttonStyle = {
        padding: '10px 20px',
        margin: '10px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
        fontSize: '16px',
    };

    const containerStyle = {
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
    };

    const productInfoStyle = {
        marginBottom: '20px',
    };

    return (
        <div style={containerStyle}>
            <div style={productInfoStyle}>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>Цена: {product.price}</p>
            </div>
            <div>
                <button style={buttonStyle} onClick={prevProduct}>Назад</button>
                <button style={buttonStyle} onClick={nextProduct}>Вперед</button>
            </div>
        </div>
    );
};

export default ProductList;
