import { FC } from 'react';
import style from './LogInAndSignUpPopUp.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { useSelector } from 'react-redux';
import { uiSliceAction } from '../../Store/Slice/uiSlice/uiSlice';
import LogIn from './LogIn';
import PasswordLogIn from './PassWordLogIn';
import SignUp from './SignUp';



const LogInAndSignUpPopUp:FC = () => {
    const dispatch:AppDispatch=useDispatch()
    const step=useSelector((state:RootState)=>state.auth.stepName)
    const hasUser=useSelector((state:RootState)=>state.auth.hasUser);
    const showLoginPopUp=()=>{
        dispatch(uiSliceAction.popUpHandler('logIn'))
    }
    return (
        <>
        <div onClick={showLoginPopUp} className={style.backDrop}></div>
            <div className={style.container}>
                {step==='phoneNumber' && <LogIn/>}
                {step==='password' && hasUser && <PasswordLogIn/>}
                {step==='signup' && !hasUser && <SignUp/>}

            </div>
        </>
    );
};
export default LogInAndSignUpPopUp;