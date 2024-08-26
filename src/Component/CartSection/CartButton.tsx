import { FC } from 'react';
import style from './CartButton.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { useNavigate, useParams } from 'react-router-dom';
import { uiSliceAction } from '../../Store/Slice/uiSlice/uiSlice';
import { deleteCartAction } from '../../Store/Action/postCartAction';
import ButtonLoading from '../Loading/ButtonLoading';



const CartButton:FC = () => {
    const authed=useSelector((state:RootState)=>state.auth.authed)
    const loading=useSelector((state:RootState)=>state.ui.showLoading)
    const dispatch:AppDispatch=useDispatch()
    const parmas=useParams() 
    const navigate=useNavigate()
    const showLoginPopUp=()=>{
        dispatch(uiSliceAction.popUpHandler('logIn'))
    }
    const submitHandler=()=>{
        dispatch(uiSliceAction.submitAlertHandler(true))
        setTimeout(()=>{
            dispatch(uiSliceAction.submitAlertHandler(false))
            navigate('/')
        },1000)

        if(parmas.restrantId){
            dispatch(deleteCartAction(parmas.restrantId))
        }

        


    }
    
    return (
        <div className={style.container}>
            {
                loading ? <button className={style.btn}><ButtonLoading/></button> :

                (!authed ? <button onClick={showLoginPopUp} className={style.btn}>ورود به حساب کاربری</button> : 
                <button onClick={submitHandler} className={style.btn}>ثبت سفارش</button>)
                
            }
            
        </div>
    );
};
export default CartButton;