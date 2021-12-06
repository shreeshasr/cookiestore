import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, calculatePrice, getAllCookies } from '../CookieSlice'
import './AddToCartButton.css'

function AddToCartButton(props) {
    const cookies = useSelector(getAllCookies)
    const dispatch = useDispatch()

    const action1 = () => {
        dispatch(addToCart(props.id))
    }

    const action2 = () => {
        for(let i=0; i<cookies.length;i++){
            if(cookies[i].id === props.id){
                dispatch(calculatePrice({id:cookies[i].id, count:cookies[i].count}))
            }
        }
    }

    const texttoBeDispalyed = () => {
        let text;
        for(let i=0; i<cookies.length;i++){
            if(cookies[i].id === props.id){
                if(cookies[i].count > 0){
                    text = "Added to cart. Need more?"
                }
                else{
                    text = "Add to cart"
                }
            }
        }
        return text
    }

    const chooseClassName = () => {
        let name;
        for(let i=0; i<cookies.length;i++){
            if(cookies[i].id === props.id){
                if(cookies[i].count > 0){
                    name = "added"
                }
                else{
                    name = "notAdded"
                }
            }
        }
        console.log("returning = "  +name)
        return name
    }

    return (
        <div className="addToCartButton">
            <button onClick={ () => action1()} className={chooseClassName()}>{texttoBeDispalyed()}</button>
            {action2()}
        </div>
    )
}

export default AddToCartButton
