import { Dispatch } from 'react';
import { uiSliceAction } from '../Slice/uiSlice/uiSlice';
import { RestrantModel } from '../../Models/RestrantModel';
import { AppDispatch } from '..';

export const fetchSliderData=(setData:Dispatch<React.SetStateAction<RestrantModel[]>>,tag:string)=>{
    return async(dispatch:AppDispatch)=>{
        try{
            const response=await fetch(`https://snappfoodapi.amirhashemi776.ir/service?tag=${tag}`)
            dispatch(uiSliceAction.loadingHandler(true))
            if(!response.ok){
                throw new Error('some things is wrong')
            }
            const data= await response.json();
            setData(data)
            dispatch(uiSliceAction.loadingHandler(false))

       }catch(err){
        if(err instanceof Error){
            console.log(err.message);
        }
            dispatch(uiSliceAction.loadingHandler(false))

       }

    }
}