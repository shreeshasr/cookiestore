import React from 'react'
import { useSelector } from 'react-redux'
import AddToCartButton from '../AddToCartButton/AddToCartButton'
import { getAllCookies } from '../CookieSlice'
import './CookieCard.css'
function CookieCard(props) {

    const cookies = useSelector(getAllCookies)
    

    const showQuantity = () => {
        
        for(let i=0; i<cookies.length;i++){
            if(cookies[i].id === props.id){
                if(cookies[i].count > 0){
                    let price = cookies[i].count * cookies[i].singlePrice
                    return <div >Total price : ({cookies[i].count} quantity * &#8377;{cookies[i].singlePrice}) = <span className="total"> &#8377;{price}</span></div>
                }
            }
        }
    }
    
    return (
        <div className="cookieCard">
            <img src={props.image} alt="biscuit"/>
            <div className="cookieInfos">
                <div className="topInfo">
                    <div className="cookieName">{props.title}</div>
                    <div className="cookiePrice">&#8377; {props.singlePrice}</div>
                </div>
            <div className="cookieDescription">{props.description}</div>
            </div>
            <div className="quantity">
                {showQuantity()}
            </div>
            <AddToCartButton id={props.id} count={props.count}/>
        </div>
    )
}

export default CookieCard
