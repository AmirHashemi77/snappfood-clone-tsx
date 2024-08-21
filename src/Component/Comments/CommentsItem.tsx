import { FC } from 'react';
import style from './CommentsItem.module.scss';



const CommentsItem:FC = () => {
    return (
        <div className={style.container}>
            <div className={style.nameAndDate}>
                <h4 className={style.name}>نیما</h4>
                <p className={style.date}>۱۲ بهمن ۱۴۰۱</p>
                <div className={style.score}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="#FFCE00"><path fillRule="evenodd" clipRule="evenodd" d="M5.99984 9.62097L2.42572 11.5L3.10832 7.52016L0.216797 4.70163L4.21278 4.12098L5.99984 0.5L7.7869 4.12098L11.7829 4.70163L8.89136 7.52016L9.57395 11.5L5.99984 9.62097Z"></path></svg>
                    <span>۴</span>
                </div>
            </div>
            <div className={style.textAndOrders}>
                <p className={style.text}>
                    طعم غذا اوکی بود ولی کلا با توجه به شرایط موجود متاسفانه دیگه تناسبی بین حجم، کیفیت و قیمت غذا وجود نداره.
                </p>
                <div className={style.ordersWrapper}>
                    <p className={style.orederItem}>فیله سوخاری</p>
                    <p className={style.orederItem}>پیتزا پنجره ای</p>
                </div>
            </div>
        </div>
    );
};
export default CommentsItem;