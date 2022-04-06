import React from "react"
import { Link, Outlet } from "react-router-dom"
import {ReactComponent as CrwnLogo } from '../assets/crown.svg'
import './navigationBar.styles.scss'

const NavigationBar = () => {
    return(
        <>
            <div className='navigation'>
                <Link className='nav-link' to='/'>
                    <CrwnLogo className='logo-container'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        <div>
                            SHOP
                        </div>
                    </Link>
                    <Link className='nav-link' to='/signin'>
                        <div>
                            SIGN IN
                        </div>
                    </Link>
                </div>
            </div>
            <Outlet/>
        </>
    )
}
export default NavigationBar