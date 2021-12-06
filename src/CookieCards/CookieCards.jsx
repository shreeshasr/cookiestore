import React from 'react'
import { useSelector } from 'react-redux';
import CookieCard from '../CookieCard/CookieCard';
import { getAllCookies } from '../CookieSlice';
import './CookieCards.css'
function CookieCards() {
    const cookies = useSelector(getAllCookies)

    return (
        <div className="cookieCards">
           {
               cookies.map( (cookie) => {
                  return <CookieCard image={cookie.image} title={cookie.title} description={cookie.description} id={cookie.id} count={cookie.count} singlePrice={cookie.singlePrice} totalPrice={cookie.totalPrice}/>
               })
           }
        </div>
    )
}

export default CookieCards
