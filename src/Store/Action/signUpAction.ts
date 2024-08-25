import { AppDispatch } from "..";
import { UserDataObject } from "../../Models/AuthModel";
import { authSliceAction } from "../Slice/authSlice/authSlice";



export const signUpAction=(newUser:UserDataObject)=>{
    return async(dispatch:AppDispatch)=>{
           try{
            const response=await fetch('https://snappfoodapi.amirhashemi776.ir/users',{
                method:'POST',
                body:JSON.stringify(newUser),
                headers:{ 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
            })
            if(!response.ok){
                throw new Error('some things is wrong');
            }
           
            dispatch(authSliceAction.authedUserDataHandler(newUser));
            dispatch(authSliceAction.authedHandler(true))
            dispatch(authSliceAction.clearData())
           }catch(err){
            if (err instanceof Error){
                console.log(err.message);

            }
           }

    }
}