import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setViewCartState } from '../ViewCartSlice'
import './Navbar.css'
function Navbar() {
    const cartState = useSelector(state => state.viewCart.isOpen)
    const dispatch = useDispatch();
    console.log("cartState in navbar "  +cartState)
    return (
        <div className="navbar">
            <div className="brandName">Cookie Cart</div>
            <button className="viewCartItems" onClick={ () => dispatch(setViewCartState())}>View My Cart</button>
        </div>
    )
}

export default Navbar
