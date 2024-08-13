import { FC } from 'react';
import style from './AppBanner.module.scss';


const AppBanner:FC = () => {
    return (
        <div className={style.container}>
            <div className={style.banner}>
                <div className={style.description}>
                    <h4>اپلیکیشن اسنپ‌فود</h4>
                    <p>با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.
                    </p>
                   
                    <p>برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید</p>
                    <div className={style.inputWrapper}>
                        <input type="text" placeholder='*********۰۹' />
                        <button>دریافت لینک</button>
                    </div>
                    <div className={style.buttons}>
                        <button className={style.appDownloadre}><img src="/images/downloadApp/playStore.svg" alt="playstore" /></button>
                        <button className={style.appDownloadre}><img src="/images/downloadApp/bazar.svg" alt="bazar" /></button>
                        <button className={style.appDownloadre}><img src="/images/downloadApp/sibapp.svg" alt="sibapp" /></button>
                        <button className={style.appDownloadre}><img src="/images/downloadApp/iapps.svg" alt="iapps" /></button>
                        
                    </div>
                    

                </div>
                <img src="/images/banner/appBanner.png" alt="app" className={style.bannerImages} />
            </div>
        </div>
    );
};
export default AppBanner;