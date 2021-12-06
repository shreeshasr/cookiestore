import { createSlice} from "@reduxjs/toolkit";
import biscotti from './images/Biscotti.jpeg'
import chocolate from './images/Chocolate.jpeg'
import macaron from './images/Macaron.jpeg'
import oatmeal from './images/Oatmeal.jpeg'
import braed from './images/Shortbread.jpeg'

const initialState = [
{
    id: '123',
    title: 'BISCOTTI COOKIES',
    description: 'Biscotti actually means “twice baked” and the cookie is indeed baked twice, resulting in its hard and crunchy texture.',
    image: biscotti,
    singlePrice: 39,
    totalPrice: 0,
    count: 0
  },
  {
    id: '456',
    title: 'CHOCOLATE CHIP COOKIES',
    description:
      'Chocolate chip cookies are the perennial classic and longtime fan favorite.',
    image: chocolate,
    singlePrice: 49,
    totalPrice: 0,
    count: 0
  },
  {
    id: '789',
    title: 'MACARON COOKIES',
    description: 'Macarons are meringue-based cookies made with almond meal, egg whites, and powdered sugar with a creme ganache in the middle.',
    image: macaron,
    singlePrice: 79,
    totalPrice: 0,
    count: 0
  },
  {
    id: '189',
    title: 'SHORTBREAD COOKIES',
    description: 'Shortbread cookies are made with a large amount of butter or shortening, which lends them the name “short.”',
    image: braed,
    singlePrice: 19,
    totalPrice: 0,
    count: 0
  },
  {
    id: '089',
    title: 'OATMEAL RAISIN COOKIES',
    description: 'Oatmeal raisin is a type of drop cookie. as its name suggests, it’s made with oats, and contains raisins and brown sugar.',
    image: oatmeal,
    singlePrice: 99,
    totalPrice: 0,
    count: 0
  },
]

export const cookieSlice = createSlice({
  name: "cookie",
  initialState,
  reducers: {
    addToCart: (state, action) => {
        for(let i=0;i<initialState.length;i++){
          if(action.payload === initialState[i].id){
            state[i].count = state[i].count  + 1;
          }
        }
    },
    removeFromCart: (state, action) => {
      for(let i=0;i<initialState.length;i++){
        if(action.payload === initialState[i].id){
          if(state[i].count > 0){
            state[i].count = state[i].count  - 1;
          }
        }
      }
    },
    removeAllFromCart: (state, action) => {
      for(let i=0;i<initialState.length;i++){
        if(action.payload === initialState[i].id){
          if(state[i].count > 0){
            state[i].count = 0;
          }
        }
      }
    },
    calculatePrice: (state, action) => {
      for(let i=0;i<initialState.length;i++){
    
        if(action.payload.id === initialState[i].id){
          state[i].totalPrice = state[i].singlePrice  * action.payload.count;
        }
      }
    },
  }
})


export const { addToCart, removeFromCart, removeAllFromCart, calculatePrice, calculateAllItemsTotalPrice} = cookieSlice.actions

export const getAllCookies = (state) => state.cookie

export default cookieSlice.reducer

