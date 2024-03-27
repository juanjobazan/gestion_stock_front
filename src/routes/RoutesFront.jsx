import { Route, Routes } from 'react-router-dom'
import NavbarC from '../components/NavbarC'
import FooterC from '../components/FooterC'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import LoginPage from '../pages/LoginPage'

const RoutesFront = () => {
    return (
        <>
            <NavbarC />
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>

            </Routes>
            <FooterC />
        </>
    )
}

export default RoutesFront
