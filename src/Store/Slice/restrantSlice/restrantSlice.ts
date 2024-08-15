import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FoodItemModel, RestrantModel } from '../../../Models/RestrantModel';


interface initialStateType{
    restrantListArr:RestrantModel[];
    currentRestrant:RestrantModel | null;
    currentFood:FoodItemModel | null
}





const initialState:initialStateType={
    restrantListArr:[],
    currentRestrant:null,
    currentFood:null


}
    
const restrantSlice=createSlice({
    name:'restrants',
    initialState,
    reducers:{
        restrantListHandler(state,action:PayloadAction<RestrantModel[]>){
            
            state.restrantListArr=[...action.payload]
        },
        currentRestrantHandler(state,action:PayloadAction<RestrantModel[]>){
        
            state.currentRestrant=action.payload[0]
        },
        currentFoodHandler(state,action:PayloadAction<FoodItemModel>){
 
            state.currentFood=action.payload
        }

    }
})


export const restrantSliceAction=restrantSlice.actions;
export default restrantSlice.reducer;