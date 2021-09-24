import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Payments from '../Payments/Payments'
import './Header.scss'
const Header = () => {
    const status=useSelector((state)=>state.auth.user);
    console.log(status);
    return (
        <>
        <div className="header">
            <Link to={status ? '/surveys' : '/'} className="header__logoBox">Mailburst</Link>
            <ul className="header__options">
            {
                    status===false ? <li><a href="/auth/google">Login with Google</a></li> 
                    : (status ? [
                    <li key='1'><Payments/></li>,
                    <li key='3'>Credits: {status.credits}</li>,
                    <li key='2'><a href='/api/logout'>Logout</a></li>
                    ] : 'Still deciding')}
            </ul>
        </div>
        </>
    )
}

export default Header
