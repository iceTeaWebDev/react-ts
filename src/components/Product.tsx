import React, { useEffect, useState } from 'react'

const Product = () => {
    const [products, setProducts] = useState([
        {
            id: 0,
            name: "",
            desc: "",
            image: ""
        }
    ])
    useEffect(() => {
        fetch("http://localhost:3000/products").then(res => res.json()).then(data => setProducts(data))
    }, [])
  return (
    <div>
        {
            products.map((item, index) => (
                <div>
                    abc
                </div>
            ))
        }
    </div>
  )
}

export default Product