import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getAllCookies, removeAllFromCart, removeFromCart } from '../CookieSlice'
import { setViewCartState } from '../ViewCartSlice'
import './CartItems.css'
function CartItems() {
    const cookies = useSelector(getAllCookies)
    const cartState = useSelector(state => state.viewCart.isOpen)
    const dispatch = useDispatch();
    
    const listCartitems = () => {
        let items = []
        for(let i=0; i<cookies.length;i++){
            if(cookies[i].count >0){
                items.push(
                <div className="singleItem">
                    <div className="itemInCartTopInfo">
                        <div className="itemInCartTopLeftInfo">
                            <img src={cookies[i].image} alt="imageOfCookie"/>
                            <div className="itemName">{cookies[i].title}</div>
                        </div>
                        <button className="closeCartButton" onClick={ () => dispatch(removeAllFromCart(cookies[i].id)) }>X</button>
                    </div>
                    <div className="quantityLabel">Quantity</div>
                    <div className="itemInCartBottomInfo">
                        <div className="addMinusQunatity">
                            <button className="addButton" onClick={ () => dispatch(removeFromCart(cookies[i].id))}>-</button>
                            <div className="qunatityNumber">{cookies[i].count}</div>
                            <button className="minusButton" onClick={ () => dispatch(addToCart(cookies[i].id))}>+</button>
                        </div>
                        <div className="totalItemPrice">
                            &#8377;{cookies[i].totalPrice}
                        </div>
                    </div>
                    
                </div>)
            }
        }

        if(items.length === 0){
            return(
                <div className="cartEmpty">
                    <div className="emptyText">Your cart is empty.</div>
                    <button className="backToStore" onClick={ () => dispatch(setViewCartState()) }>&larr; Back to store</button>
                </div>
            )
        }
        else{
            return(
            <>
            {items}
            <div className="checkoutDetails">
                   <div className="checkoutInfo">Shipping and taxes will be calculated at checkout.</div>
                   <div className="amountToBePaid">
                    <div className="allItemTotalPrice">Total </div>
                    <div className="allItemTotalPrice">&#8377;{calculateAllItemsTotalPrice()}</div>
                   </div>
                   <button className="checkoutButton">Checkout &rarr;</button>
            </div>
            </>)
        }
        
    }

    const shouldDisplayCartOrNot = () => {
        let display;
        if(cartState){
            display =
            <div className="cartItems">
                <div className="topOfCart">
                    <div>Cart summary</div>
                        <button className="closeCartButton" onClick={ () => dispatch(setViewCartState()) }>X</button>
                </div>
                <div className="listOfItems">{listCartitems()}</div>
               
            </div>
            
        }
        return display
    }

    const calculateAllItemsTotalPrice = () => {
        let totalPriceOfAllItems = 0;
    
        for(let i=0;i<cookies.length;i++){
          totalPriceOfAllItems = parseInt(totalPriceOfAllItems) + parseInt(cookies[i].totalPrice);
        }
        console.log("returning "+ totalPriceOfAllItems)
        return totalPriceOfAllItems
      }

    return (
           <div className="CartDetailsAndCheckout">
               {shouldDisplayCartOrNot()}
            </div>
    )
}

export default CartItems
