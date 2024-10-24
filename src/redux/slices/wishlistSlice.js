import { createSlice } from "@reduxjs/toolkit";



export const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        //to add items to the state
        addwishlistItem : (state,action)=>{
            state.push(action.payload)
        },
        //to delete an item from state
        remoewishlistitem : (state,action)=>{
          return state.filter((item)=>item.id!=action.payload)
        }
    }
})

export const {addwishlistItem,remoewishlistitem} = wishlistSlice.actions

export default wishlistSlice.reducer