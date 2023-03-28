import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AdminDashboard from './components/admin/AdminDashboard'
import ProductCreate from './components/admin/ProductCreate'
import Products from './components/admin/Products'
import ProductUpdate from './components/admin/ProductUpdate'
import Product from './components/Product'
import ProductsDetail from './components/ProductsDetail'
import Root from './components/Root'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'products',
        element: <Product />,
        children: [
          {
            path: ':id',
            element: <ProductsDetail />
          }
        ]
      }
    ]
  },
  {
    path: 'admin',
    element: <AdminDashboard />,
    children: [
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/add',
        element: <ProductCreate />
      },
      {
        path: 'products/:id/update',
        element: <ProductUpdate />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
