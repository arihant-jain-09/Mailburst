import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import Payments from '../Payments/Payments'
const Header = () => {
    const status=useSelector((state)=>state.auth.user);
    console.log(status);
    return (
        <nav>
            <div className='nav-wrapper'>
                <Link to={status ? '/surveys' : '/'} className="left brand-logo">Emaily</Link>
                <ul className="right">
                    {
                    status===false ? <li><a href="/auth/google">Login with Google</a></li> 
                    : (status ? [
                    <li key='1'><Payments/></li>,
                    <li style={{margin:'0 10px'}} key='3'>Credits: {status.credits}</li>,
                    <li key='2'><a href='/api/logout'>Logout</a></li>
                    ] : 'Still deciding')}
                </ul>
            </div>
        </nav>
    )
}

export default Header
