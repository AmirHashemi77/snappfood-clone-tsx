import { FC, useEffect, useRef } from 'react';
import style from './SignUp.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { useSelector } from 'react-redux';
import { authSliceAction } from '../../Store/Slice/authSlice/authSlice';
import { uiSliceAction } from '../../Store/Slice/uiSlice/uiSlice';
import { v4 as uuidv4 } from 'uuid';
import { signUpAction } from '../../Store/Action/signUpAction';



const SignUp:FC = () => {
    const passwordInput=useRef<HTMLInputElement>(null)
    const nameInput=useRef<HTMLInputElement>(null)
    const signUpBtn=useRef<HTMLButtonElement>(null)
    const dispatch:AppDispatch=useDispatch()
    const newUserPhoneNumber=useSelector((state:RootState)=>state.auth.notRegisterPhone) 
    useEffect(()=>{
        if(signUpBtn.current){
            signUpBtn.current.disabled=false;
        }
    },[])
    const inputCheck=()=>{
    const persianLettersRegex = new RegExp(/^[\u0600-\u06FF\s]+$/);
    const englishCharacterRegex = new RegExp(/^[a-zA-Z0-9?><;,{}[\]\-_+=!@#$%\^&*|']*$/);
    
    const nameCheck=nameInput.current && nameInput.current.value.length>4 && persianLettersRegex.test(nameInput.current.value)
    const passwordCheck=passwordInput.current && passwordInput.current.value.length>5 && englishCharacterRegex.test(passwordInput.current.value)
    if(signUpBtn.current){
        if( nameCheck && passwordCheck){
            signUpBtn.current.disabled=false;
        }else{
            signUpBtn.current.disabled=true;
        }
    }
    }
    const backBtnHandler=()=>{
        dispatch(authSliceAction.changeStep('phoneNumber'))
        
    }
    const signUpHandler=()=>{
        if(nameInput.current && passwordInput.current &&  newUserPhoneNumber){
            const newUserData={
                id:uuidv4(),
                name:nameInput.current.value,
                phone:newUserPhoneNumber,
                password:passwordInput.current.value
            }
            dispatch(signUpAction(newUserData))
            dispatch(uiSliceAction.popUpHandler('logIn'))

        }
    }
    return (
        <div className={style.container}>
            <div className={style.header}>
                <button onClick={backBtnHandler} className={style.backBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="0.5625rem" height="1rem" viewBox="0 0 9 16" fill="#676A70"><path d="M0.294622 15.2946C-0.0946505 14.9053 -0.0949944 14.2743 0.293854 13.8846L6.17001 8L0.293852 2.11539C-0.0949964 1.72569 -0.0946506 1.09466 0.294622 0.705388C0.684195 0.315815 1.31582 0.315815 1.70539 0.705388L8.2929 7.2929C8.68342 7.68342 8.68342 8.31659 8.2929 8.70711L1.70539 15.2946C1.31582 15.6842 0.684195 15.6842 0.294622 15.2946Z"></path></svg>
                </button>
                
                
                
            </div>
            <h3 className={style.title}>
                 ایجاد حساب کاربری
            </h3>
    
                <div className={style.inputContainer}>
                    <p>نام و نام خانوادگی</p>
                    <input ref={nameInput} onChange={inputCheck} className={style.passwordInput} type="text" />
                    <small>شامل حروف فارسی میشود، حداقل پنج کاراکتر</small>
                </div>
                <div className={style.inputContainer}>
                    <p>رمز عبور</p>
                    <input ref={passwordInput} onChange={inputCheck} className={style.passwordInput} type="password" />
                    <small> شامل اعداد و کاراکتر های انگلیسی میشود ،حداقل شش کاراکتر</small>
                </div>
                <div className={style.footer}>
                    <button ref={signUpBtn} onClick={signUpHandler}  className={style.LogInBtn}>ثبت نام</button>
                </div>
            
        </div>
    );
};
export default SignUp;