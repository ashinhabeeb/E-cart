import { createSlice } from "@reduxjs/toolkit";





export const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //add item to cart
        addItemtoCart : (state,action)=>{
            state.push(action.payload)
        },
        removeCartItem : (state,action)=>{
            return state.filter((item)=>item.id!=action.payload)
        },
        //empty cart on checkout
        emptyCart : (state)=>{
            return state = []
        }
    }
})

export const {addItemtoCart,removeCartItem,emptyCart} = cartSlice.actions

export default cartSlice.reducer
