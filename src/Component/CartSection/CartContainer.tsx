import { FC, useEffect, useRef } from 'react';
import style from './CartContainer.module.scss';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postCartAction } from '../../Store/Action/postCartAction';
import SendTime from './SendTime';
import SendingType from './SendingType';
import Cart from './Cart';
import EmptyCart from './EmptyCart';

interface PropsType{};

const CartContainer:FC<PropsType> = () => {
    const totalQuantity=useSelector((state:RootState)=>state.cart.totalQuantity)
    const parmas=useParams()
    const dispatch:AppDispatch=useDispatch()
    const cartData=useSelector((state:RootState)=>state.cart)
    const cartContainer=useRef<HTMLDivElement>(null)
 
      window.onwheel=(e)=>{
          if(e.deltaY>0 && cartContainer.current){
              cartContainer.current.scrollBy(0,cartContainer.current.offsetHeight)
       }else if(e.deltaY<0 && cartContainer.current){
           cartContainer.current.scrollBy(0,-cartContainer.current.offsetHeight)
          }
       
  }

   
    useEffect(()=>{
   
        if(cartData.change){
            dispatch(postCartAction({
               id:parmas.restrantId ? parmas.restrantId : '',
               ...cartData
       
            }))

        }
        
        
            
       
        
        // eslint-disable-next-line
    },[cartData,dispatch])
   
    return (
        <div ref={cartContainer} className={style.container}>
            <SendTime/>
            <SendingType/>
            {
                totalQuantity>0 ? <Cart/> : <EmptyCart/>

            }
            </div>
    );
};
export default CartContainer;