import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
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
    const handleClick = (id: any) => {
        fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        }).then(res => res.json()).then(data => console.log(data));
        setProducts(products.filter(item => item.id !== id));
    }
    return (
        <div className="container">
            <Link to='add' className="btn btn-primary">Add Products</Link>
            <div className='row'>
                {
                    products.map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4 shadow-sm">
                                <img src={item.image} className="card-img-top" alt="Product 1" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.desc}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => handleClick(item.id)}>Delete</button>
                                            <Link to={`${item.id}/update`} className="btn btn-sm btn-outline-secondary">Update</Link>
                                        </div>
                                        <small className="text-muted">$19.99</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Outlet />
        </div>
    )
}

export default Products