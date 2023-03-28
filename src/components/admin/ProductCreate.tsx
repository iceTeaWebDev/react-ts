import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const ProductCreate = () => {
    let navigate = useNavigate();
    const [product, setProduct] = useState(
        {
            id: 0,
            name: "",
            desc: "",
            image: "https://picsum.photos/150/150"
        }
    )
    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setProduct(values => ({ ...values, [name]: value }))
        console.log(value);
    }
    const handleClick = async () => {
        console.log("abca")
        
        await fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
        navigate('/admin/products')
    }
    return (
        <div className='container'>
            <div className="form-group">
                <label htmlFor="product_name">Product Name:</label>
                <input type="text" id="product_name" name="name" className="form-control" required onChange={(e) => handleChange(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="product_description">Product Description:</label>
                <textarea id="product_description" name="desc" className="form-control" required onChange={(e) => handleChange(e)}></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="product_image">Product Image:</label>
                <div className="custom-file">
                    <input type="file" id="product_image" name="product_image" className="custom-file-input" accept="image/*" required />
                    <label className="custom-file-label" htmlFor="image">Choose file</label>
                </div>
            </div>
            <button className="btn btn-primary" onClick={() => handleClick()}>Add Product</button>
        </div>
    )
}

export default ProductCreate