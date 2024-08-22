import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CartItemModel from '../../../Models/CartItemModel';

interface initialStateType{
    items:CartItemModel[];
    totalQuantity:number;
    totalPrice:number;
    change?:boolean;
}



const initialState:initialStateType={
    items:[],
    totalQuantity:0,
    totalPrice:0,
    change:false,
    



}




const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        replaceToCart(state,action:PayloadAction<initialStateType>){
            state.items=action.payload.items
            state.totalQuantity=action.payload.totalQuantity
            state.totalPrice=action.payload.totalPrice
        },

        addToCart(state,action:PayloadAction<CartItemModel>){
          
                state.items.push(action.payload);
                state.totalPrice=state.totalPrice + action.payload.price;
                state.totalQuantity++;
                state.change=true

            

        },
        plusHander(state,action:PayloadAction<{id:string}>){
            const availableItem=state.items.find((item)=>item.id===action.payload.id)
            if(availableItem){
                availableItem.quantity++;
             
                state.totalPrice=state.totalPrice+availableItem.price;
                state.totalQuantity++;
                state.change=true
            }
        },
        removeFromCart(state,action:PayloadAction<string>){
            const currentItem=state.items.find((item)=>item.id===action.payload)

            if(currentItem && currentItem.quantity > 1){
                currentItem.quantity--;
                currentItem.totalPrice-=currentItem.price;
                state.totalQuantity--;
                state.totalPrice=state.totalPrice-currentItem.price;
                state.change=true

            }else if(currentItem && currentItem.quantity===1){
                state.items=state.items.filter((item)=>item.id!==currentItem.id);
                state.totalQuantity--;
                state.totalPrice=state.totalPrice-currentItem.price;
                state.change=true

            }
        },
        clearAll(state){
            state.items=[];
            state.totalQuantity=0;
            state.totalPrice=0;
            state.change=true

        }
       
        
        
        
    }
})


export const cartSliceAction=cartSlice.actions;

export default cartSlice.reducer;