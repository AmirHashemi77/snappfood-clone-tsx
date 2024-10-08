import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store";
import { uiSliceAction } from "../../Store/Slice/uiSlice/uiSlice";
import { FC } from 'react';
import style from './LogIn.module.scss';
import { register } from "../../Store/Action/registerAction";




const LogIn:FC = () => {
 
const phoneInput=useRef<HTMLInputElement>(null) 
const nextBtn=useRef<HTMLButtonElement>(null)
const dispatch:AppDispatch=useDispatch()
useEffect(()=>{
    if(nextBtn.current){
        nextBtn.current.disabled=true;  
    }
},[])
    const phoneHandler=()=>{
        const mobileNumberReg=new RegExp(/09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/)
        if(phoneInput.current && nextBtn.current){
            if(phoneInput.current.value.length===11 && mobileNumberReg.test(phoneInput.current.value)){
                nextBtn.current.disabled=false;
            }else{
                nextBtn.current.disabled=true;
            }
        }

    }
    const showLoginPopUp=()=>{
        dispatch(uiSliceAction.popUpHandler('logIn'))
    }

    const registering=()=>{
        if(phoneInput.current){
            dispatch(register(phoneInput.current.value))
        }
    }
return (
    <div className={style.container}>
        <div className={style.header}>
            <button onClick={showLoginPopUp} className={style.closeBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="0.875rem" height="0.875rem" viewBox="0 0 14 14" fill="#676A70"><path d="M8.41 7.00019L12.71 2.71019C12.8983 2.52188 13.0041 2.26649 13.0041 2.00019C13.0041 1.73388 12.8983 1.47849 12.71 1.29019C12.5217 1.10188 12.2663 0.996094 12 0.996094C11.7337 0.996094 11.4783 1.10188 11.29 1.29019L7 5.59019L2.71 1.29019C2.5217 1.10188 2.2663 0.996094 2 0.996094C1.7337 0.996094 1.4783 1.10188 1.29 1.29019C1.1017 1.47849 0.995908 1.73388 0.995908 2.00019C0.995908 2.26649 1.1017 2.52188 1.29 2.71019L5.59 7.00019L1.29 11.2902C1.19627 11.3831 1.12188 11.4937 1.07111 11.6156C1.02034 11.7375 0.994202 11.8682 0.994202 12.0002C0.994202 12.1322 1.02034 12.2629 1.07111 12.3848C1.12188 12.5066 1.19627 12.6172 1.29 12.7102C1.38296 12.8039 1.49356 12.8783 1.61542 12.9291C1.73728 12.9798 1.86799 13.006 2 13.006C2.13201 13.006 2.26272 12.9798 2.38458 12.9291C2.50644 12.8783 2.61704 12.8039 2.71 12.7102L7 8.41018L11.29 12.7102C11.383 12.8039 11.4936 12.8783 11.6154 12.9291C11.7373 12.9798 11.868 13.006 12 13.006C12.132 13.006 12.2627 12.9798 12.3846 12.9291C12.5064 12.8783 12.617 12.8039 12.71 12.7102C12.8037 12.6172 12.8781 12.5066 12.9289 12.3848C12.9797 12.2629 13.0058 12.1322 13.0058 12.0002C13.0058 11.8682 12.9797 11.7375 12.9289 11.6156C12.8781 11.4937 12.8037 11.3831 12.71 11.2902L8.41 7.00019Z"></path></svg>
            </button>
            <img className={style.logo} src="/images/icon.svg" alt="" />
        </div>
        <h3 className={style.title}><span>ورود</span> یا <span>عضویت</span></h3>
        <div className={style.inputContainer}>
            <p>شماره تلفن همراه</p>
            <input onChange={phoneHandler}  ref={phoneInput} className={style.phoneInput} type="text" />
            <small>شماره ۰۹ شروع میشود</small>
        </div>
        <button onClick={registering} ref={nextBtn}  className={style.nextBtn} >ادامه</button>
    </div>
);
};
export default LogIn;