import { AppDispatch } from '..';
import { searchSliceAction } from '../Slice/searchSlice/searchSlice';




export const fetchSearchResultAction=(input:string)=>{
    return async(dispatch:AppDispatch)=>{
       try{
            const response=await fetch(`https://snappfoodapi.amirhashemi776.ir/service?title_like=${input}`)
           
            
            
            if(!response.ok){
                throw new Error('some things is wrong')
            }

            const data=await response.json()
            
            dispatch(searchSliceAction.setResultArr(data))

       }catch(err){
        if(err instanceof Error){
            console.log(err.message);
        }
       }

    }
}