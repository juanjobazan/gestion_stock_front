import { Route, Routes } from 'react-router-dom'
import NavbarC from '../components/NavbarC'
import FooterC from '../components/FooterC'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import CreateProductPage from '../pages/CreateProductPage'
import CustomerPage from '../pages/CustomerPage'
import CreateCustomerPage from '../pages/CreateCustomerPage'

const RoutesFront = () => {
    return (
        <>
            <NavbarC />
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
                <Route path='/product' element={<ProductPage/>}/>
                <Route path='/createProduct' element={<CreateProductPage/>}/>
                <Route path='/customer' element={<CustomerPage/>}/>
                <Route path='/createCustomer' element={<CreateCustomerPage/>}/>
            </Routes>
            <FooterC />
        </>
    )
}

export default RoutesFront
