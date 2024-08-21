import { AppDispatch } from ".."
import { cartSliceAction } from "../Slice/cartSlice/cartSclice"

export const fetchCartData=(restrantId:string)=>{
    return async (dispatch:AppDispatch)=>{
        try{
            const response=await fetch(`https://snappfoodapi.amirhashemi776.ir/cart?id=${restrantId}`)
            if(!response.ok){
                throw new Error('some thing is wrong')
            }
            const data=await response.json()


            if(data.length>0){
                dispatch(cartSliceAction.replaceToCart({
                    items:data[0].items,
                    totalQuantity:data[0].totalQuantity,
                    totalPrice:data[0].totalPrice,
                }))
            }else{
                dispatch(cartSliceAction.replaceToCart({
                    items:[],
                    totalQuantity:0,
                    totalPrice:0,
                }))

            }
        }catch(err){
            if(err instanceof Error)
            console.log(err.message);
        }
    }
}