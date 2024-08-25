import { FC, useRef, useState } from 'react';
import style from './PasswordLogIn.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { useSelector } from 'react-redux';
import { authSliceAction } from '../../Store/Slice/authSlice/authSlice';
import { uiSliceAction } from '../../Store/Slice/uiSlice/uiSlice';



const PasswordLogIn:FC = () => {
    const passwordInput=useRef<HTMLInputElement>(null);
    const logInBtn=useRef<HTMLButtonElement>(null);
    const [showErr,setShowErr]=useState(false);
    const dispatch:AppDispatch=useDispatch()
    const registeredUserData=useSelector((state:RootState)=>state.auth.registeredUser)
    const inputCheck=()=>{
        if(passwordInput.current && logInBtn.current){
            if(passwordInput.current.value.length>0){
                logInBtn.current.disabled=false;
            }else{
                logInBtn.current.disabled=true;
            }
        }
    }
    const backBtnHandler=()=>{
        dispatch(authSliceAction.changeStep('phoneNumber'))
        
    }
    const logInHandler=()=>{
        if('password' in registeredUserData && passwordInput.current){
            if(registeredUserData.password===passwordInput.current.value){
                dispatch(authSliceAction.authedHandler(true))
                dispatch(authSliceAction.clearData())
                dispatch(uiSliceAction.popUpHandler('logIn'))
    
            }else{
                setShowErr(true)
            }
        }
    }

    
    return (
        <div className={style.container}>
            <div className={style.header}>
                <button onClick={backBtnHandler} className={style.backBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="0.5625rem" height="1rem" viewBox="0 0 9 16" fill="#676A70"><path d="M0.294622 15.2946C-0.0946505 14.9053 -0.0949944 14.2743 0.293854 13.8846L6.17001 8L0.293852 2.11539C-0.0949964 1.72569 -0.0946506 1.09466 0.294622 0.705388C0.684195 0.315815 1.31582 0.315815 1.70539 0.705388L8.2929 7.2929C8.68342 7.68342 8.68342 8.31659 8.2929 8.70711L1.70539 15.2946C1.31582 15.6842 0.684195 15.6842 0.294622 15.2946Z"></path></svg>
                </button>
                <button className={style.passwordTypeChanger}>ورود با رمز یک‌بار مصرف</button>
                
                
            </div>
            <h3 className={style.title}>ورود به حساب کاربری</h3>

                <div className={style.inputContainer}>
                    <p>رمز عبور</p>
                    <input ref={passwordInput} onChange={inputCheck} className={style.passwordInput} type="password" />
                    {showErr && <small className={style.err}>رمز وارد شده صحیح نمیباشد</small>}
                </div>
                <div className={style.footer}>
                    <button className={style.remmemberPassword}>رمز عبورتان را فراموش کرده اید؟</button>
                    <button ref={logInBtn} className={style.LogInBtn} onClick={logInHandler}>ورود</button>
                </div>
            
        </div>
    );
};
export default PasswordLogIn;