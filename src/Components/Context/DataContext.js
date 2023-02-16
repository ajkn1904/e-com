import React, { createContext, useEffect, useState } from 'react';

const ProductDataContext = createContext();


const DataContext = (props) => {

    const [productData, setProductData] = useState([])
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProductData(data))
    }, [])

    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategoryData(data))
    }, [])



    const apiData = { productData, categoryData }

    return (
        <ProductDataContext.Provider value={apiData}>
            {props.children}
        </ProductDataContext.Provider>
    );
};

export { DataContext, ProductDataContext };