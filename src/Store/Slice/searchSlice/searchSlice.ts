import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RestrantModel } from '../../../Models/RestrantModel';


interface initialStateType {
    resultArr:RestrantModel[]
}


const initialState:initialStateType={
    resultArr:[]

}
 

const searchSlice=createSlice({
    name:'search',
    initialState,
    reducers:{
        setResultArr(state,action:PayloadAction<RestrantModel[]>){
            state.resultArr=action.payload
        }
    }
})


export const searchSliceAction=searchSlice.actions;

export default searchSlice.reducer;