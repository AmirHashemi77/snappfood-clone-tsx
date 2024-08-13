import { FC } from 'react';
import style from './SignInBanner.module.scss';

interface PropsType{};

const SignInBanner:FC<PropsType> = () => {
    return (
        <div className={style.container}>
            <div className={style.banner}>
                <div className={style.description}>
                    <h4 className={style.title}>صاحب کسب و کار هستید؟</h4>
                    <p className={style.subtitle}>با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.</p>
                    <button>ثبت نام فروشندگان</button>
                </div>
                <img src="/images/banner/vendor_pic.png" alt="banner" />
            </div>
            
        </div>
    );
};
export default SignInBanner;