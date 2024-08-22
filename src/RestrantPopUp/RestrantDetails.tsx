import { FC } from 'react';
import style from './RestrantDetails.module.scss';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Store';
import { useDispatch } from 'react-redux';
import { uiSliceAction } from '../Store/Slice/uiSlice/uiSlice';
import { RestrantModel } from '../Models/RestrantModel';

interface PropsType{};

const RestrantDetails:FC<PropsType> = () => {
    const currentRestrant=useSelector((state:RootState)=>state.restrants.currentRestrant) as RestrantModel
    const dispatch:AppDispatch=useDispatch()
    const restrantPopUpHandler=()=>{
        dispatch(uiSliceAction.popUpHandler('restrant'))
    }
    return (
        <div className={style.container}>
             <button onClick={restrantPopUpHandler} className={style.closeBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="0.875rem" height="0.875rem" viewBox="0 0 14 14" fill="#676A70"><path d="M8.41 7.00019L12.71 2.71019C12.8983 2.52188 13.0041 2.26649 13.0041 2.00019C13.0041 1.73388 12.8983 1.47849 12.71 1.29019C12.5217 1.10188 12.2663 0.996094 12 0.996094C11.7337 0.996094 11.4783 1.10188 11.29 1.29019L7 5.59019L2.71 1.29019C2.5217 1.10188 2.2663 0.996094 2 0.996094C1.7337 0.996094 1.4783 1.10188 1.29 1.29019C1.1017 1.47849 0.995908 1.73388 0.995908 2.00019C0.995908 2.26649 1.1017 2.52188 1.29 2.71019L5.59 7.00019L1.29 11.2902C1.19627 11.3831 1.12188 11.4937 1.07111 11.6156C1.02034 11.7375 0.994202 11.8682 0.994202 12.0002C0.994202 12.1322 1.02034 12.2629 1.07111 12.3848C1.12188 12.5066 1.19627 12.6172 1.29 12.7102C1.38296 12.8039 1.49356 12.8783 1.61542 12.9291C1.73728 12.9798 1.86799 13.006 2 13.006C2.13201 13.006 2.26272 12.9798 2.38458 12.9291C2.50644 12.8783 2.61704 12.8039 2.71 12.7102L7 8.41018L11.29 12.7102C11.383 12.8039 11.4936 12.8783 11.6154 12.9291C11.7373 12.9798 11.868 13.006 12 13.006C12.132 13.006 12.2627 12.9798 12.3846 12.9291C12.5064 12.8783 12.617 12.8039 12.71 12.7102C12.8037 12.6172 12.8781 12.5066 12.9289 12.3848C12.9797 12.2629 13.0058 12.1322 13.0058 12.0002C13.0058 11.8682 12.9797 11.7375 12.9289 11.6156C12.8781 11.4937 12.8037 11.3831 12.71 11.2902L8.41 7.00019Z"></path></svg>
            </button>
            <div className={style.header}>
                <img className={style.restrantLogo} src={`/images/bgAndLogo/${currentRestrant.logo}.jpeg`} alt="logo" />
                <div className={style.information}>
                    <h4 className={style.title}>{currentRestrant.title}</h4>
                    <p className={style.subtitle}>{currentRestrant.subtitle}</p>
                    <div className={style.loc}>
                        <svg width="12" height="14" viewBox="0 1 12 14" fill="#4444" fillOpacity="0.2"><path d="M10.0069 2.02408C12.2198 4.27755 12.2198 7.93114 10.0069 10.1846L7.00165 13.2448C6.44841 13.8082 5.55143 13.8082 4.99818 13.2448L1.99298 10.1846C-0.219991 7.93114 -0.219991 4.27755 1.99298 2.02408C4.20595 -0.229382 7.79389 -0.229382 10.0069 2.02408ZM5.99992 3.5586C4.61921 3.5586 3.49992 4.69836 3.49992 6.10434C3.49992 7.51032 4.61921 8.65009 5.99992 8.65009C7.38063 8.65009 8.49992 7.51032 8.49992 6.10434C8.49992 4.69836 7.38063 3.5586 5.99992 3.5586Z"></path></svg>
                        <p>{currentRestrant.address}</p>
                    </div>
                </div>
            </div>
            <div className={style.details}>
                <div className={style.detailItem}>
                    <svg width="1.125rem" height="1.125rem" viewBox="0 0 18 18" fill="#676A70"><path fillRule="evenodd" clipRule="evenodd" d="M8.99984 0.666016C13.6022 0.666016 17.3332 4.39698 17.3332 8.99935C17.3332 13.6017 13.6022 17.3327 8.99984 17.3327C4.39746 17.3327 0.666504 13.6017 0.666504 8.99935C0.666504 4.39698 4.39746 0.666016 8.99984 0.666016ZM8.99984 2.33268C5.31794 2.33268 2.33317 5.31745 2.33317 8.99935C2.33317 12.6812 5.31794 15.666 8.99984 15.666C12.6817 15.666 15.6665 12.6812 15.6665 8.99935C15.6665 5.31745 12.6817 2.33268 8.99984 2.33268ZM8.99984 3.99935C9.4272 3.99935 9.77943 4.32105 9.82756 4.7355L9.83317 4.83268V8.72935L11.9197 9.9462C12.2889 10.1615 12.431 10.6169 12.2638 10.9991L12.2197 11.0859C12.0043 11.4551 11.549 11.5972 11.1667 11.43L11.0799 11.3858L8.57995 9.9275C8.35238 9.79475 8.2027 9.56344 8.17225 9.30551L8.1665 9.20768V4.83268C8.1665 4.37245 8.5396 3.99935 8.99984 3.99935Z"></path></svg>
                    <p className={style.hoursOfWork}>ساعت کاری</p>
                    <p className={style.hours}><span>باز</span> امروز از ساعت <span>۱۱:۰۰</span> تا <span> ۲۳:۱۵</span></p>

                </div>
                <div className={style.detailItem}>
                    <svg width="1.1875rem" height="0.875rem" viewBox="0 0 19 14" fill="#676A70"><path d="M7.56427 0.605469C6.96744 0.605469 6.42056 0.863132 6.04984 1.27855C5.19798 1.34428 4.57223 1.87538 3.96751 2.39333L3.73614 2.60367C3.4597 2.83528 2.71574 3.45542 1.50428 4.4641C1.07927 4.81796 0.833496 5.3424 0.833496 5.89543C0.833496 6.12155 1.0168 6.30485 1.24292 6.30485C1.33854 6.30485 1.43115 6.27138 1.50471 6.21028C3.13935 4.8511 4.17062 3.99245 4.59852 3.63432L4.85092 3.42398C5.12699 3.18735 5.33996 3.01119 5.54503 2.8771V7.39934C5.50021 7.42408 5.44992 7.45169 5.39416 7.48215C5.0708 7.65879 4.95037 8.06313 5.12436 8.38792C5.29685 8.70991 5.69771 8.83109 6.01969 8.6586C6.02165 8.65755 6.0236 8.6565 6.02554 8.65541C7.37724 7.91366 8.14255 7.49497 8.32148 7.39934C9.04188 7.01022 9.48359 6.66316 10.1514 6.66316C10.5905 6.66316 10.9297 7.01285 10.9297 7.52554C10.9297 7.8279 10.8639 7.94096 10.7403 8.09345C10.6168 8.24594 10.3986 8.42473 10.0883 8.61929C9.35738 9.07677 8.55285 9.86028 8.55285 9.86028L8.51078 9.92338L8.46871 9.96544C7.68784 11.1039 6.68348 12.0478 4.89299 12.0478H1.50657C1.13484 12.0478 0.833496 12.3491 0.833496 12.7209C0.833496 13.0926 1.13484 13.3939 1.50657 13.3939H4.89299C7.12256 13.3939 8.57914 12.1267 9.49936 10.8278C9.49936 10.8278 9.98576 10.3756 10.4248 10.0285H16.3143C17.4238 10.0285 18.3335 9.11884 18.3335 8.00932V2.6247C18.3335 1.51517 17.4238 0.605469 16.3143 0.605469H7.56427ZM7.56427 1.95162H16.3143C16.6929 1.95162 16.9873 2.24609 16.9873 2.6247V3.29778H7.56427V4.64393H16.9873V8.00932C16.9873 8.38792 16.6929 8.68239 16.3143 8.68239H11.9813C12.168 8.35637 12.2758 7.96199 12.2758 7.52554C12.2758 6.33188 11.3398 5.31701 10.1514 5.31701C9.01033 5.31701 8.2426 5.91121 7.66943 6.22145C7.57741 6.27141 7.20932 6.46597 6.89119 6.64213V2.6247C6.89119 2.24609 7.18566 1.95162 7.56427 1.95162Z"></path></svg>
                    <p className={style.typeOfPay}>شیوه های پرداخت</p>
                    <p className={style.type}>{currentRestrant.paymentType}</p>
                </div>
                <div className={style.detailItem}>
                    <svg width="1.1875rem" height="1.1875rem" viewBox="0 0 19 19" fill="#676A70"><path fillRule="evenodd" clipRule="evenodd" d="M14.1668 0.0410156C11.5205 0.0410156 9.37516 2.18632 9.37516 4.83268C9.37516 7.47905 11.5205 9.62435 14.1668 9.62435C16.8132 9.62435 18.9585 7.47905 18.9585 4.83268C18.9585 2.18632 16.8132 0.0410156 14.1668 0.0410156ZM10.6252 4.83268C10.6252 2.87667 12.2108 1.29102 14.1668 1.29102C16.1228 1.29102 17.7085 2.87667 17.7085 4.83268C17.7085 6.78869 16.1228 8.37435 14.1668 8.37435C12.2108 8.37435 10.6252 6.78869 10.6252 4.83268Z"></path><path d="M8.39257 3.99935C8.35364 4.27152 8.3335 4.54975 8.3335 4.83268C8.3335 5.11562 8.35364 5.39385 8.39257 5.66602H6.00307L7.21753 10.8287C7.29617 11.2246 7.64727 11.5072 8.06683 11.4993L14.5161 11.4995C14.9197 11.5072 15.2708 11.2246 15.3524 10.8147L15.4135 10.5325C16.0884 10.3856 16.7197 10.1218 17.2852 9.76346L16.9842 11.1534C16.7483 12.3412 15.695 13.1891 14.5002 13.166L8.0828 13.1659C6.87203 13.1891 5.81872 12.3412 5.58898 11.1819L3.50682 2.33268H1.66683C1.20659 2.33268 0.833496 1.95959 0.833496 1.49935C0.833496 1.03911 1.20659 0.666016 1.66683 0.666016H4.16683C4.55354 0.666016 4.88944 0.932053 4.97801 1.30848L5.61101 3.99935H8.39257Z"></path><path d="M6.66683 16.4993C6.66683 17.4198 7.41302 18.166 8.3335 18.166C9.25397 18.166 10.0002 17.4198 10.0002 16.4993C10.0002 15.5789 9.25397 14.8327 8.3335 14.8327C7.41302 14.8327 6.66683 15.5789 6.66683 16.4993Z"></path><path d="M12.5002 16.4993C12.5002 17.4198 13.2464 18.166 14.1668 18.166C15.0873 18.166 15.8335 17.4198 15.8335 16.4993C15.8335 15.5789 15.0873 14.8327 14.1668 14.8327C13.2464 14.8327 12.5002 15.5789 12.5002 16.4993Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M16.4585 3.37435C16.7026 3.61843 16.7026 4.01415 16.4585 4.25823L14.1668 6.5499C13.9228 6.79398 13.527 6.79398 13.2829 6.5499L12.2413 5.50823C11.9972 5.26415 11.9972 4.86843 12.2413 4.62435C12.4854 4.38027 12.8811 4.38027 13.1252 4.62435L13.7249 5.22407L15.5746 3.37435C15.8187 3.13027 16.2144 3.13027 16.4585 3.37435Z"></path></svg>
                    <p className={style.cardPrice}>حداقل سبد خرید</p>
                    <p className={style.price}><span>۵۵۰۰۰</span>تومان</p>
                </div>
            </div>
        </div>
    );
};
export default RestrantDetails;