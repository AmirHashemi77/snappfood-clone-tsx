import { FC } from 'react';
import style from './RestrantCard.module.scss';
import { Link } from 'react-router-dom';

interface PropsType{
    id:string;
    title:string;
    subtitle:string;
    rate:number;
    logo:string;
    image:string
};

const RestrantCard:FC<PropsType> = ({id,image,logo,rate,subtitle,title}) => {
    return (
        <Link to={`/menu/${id}`} className={style.container}>
            <div className={style.imageContainer}>
                <img className={style.mainImage} src={`/images/bgAndLogo/${image}.jpeg`} alt="bg" />
                <div className={style.offDetail}>
                تخفیف ویژه اولین سفارش از این رستوران
                </div>
                <img className={style.restrantLogo} src={`/images/bgAndLogo/${logo}.jpeg`} alt="logo" />
                


            </div>
            <div className={style.decription}>
                <h4 className={style.title}>{title}</h4>
                <div className={style.rateSection}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="#FFCE00"><path fillRule="evenodd" clipRule="evenodd" d="M5.99984 9.62097L2.42572 11.5L3.10832 7.52016L0.216797 4.70163L4.21278 4.12098L5.99984 0.5L7.7869 4.12098L11.7829 4.70163L8.89136 7.52016L9.57395 11.5L5.99984 9.62097Z"></path></svg>
                        <span className={style.score}>{rate}</span>
                        <span className={style.number}>(۱۱۰۰)</span>
                </div>
                <p className={style.subtitle}>{subtitle}</p>
                <div className={style.postSection}>
                <svg width="1.25rem" height="1.25rem" viewBox="0 0 20 20" fill="#676A70" xmlns="http://www.w3.org/2000/svg"><path d="M14.5832 9.58325C14.1229 9.58325 13.7498 9.95635 13.7498 10.4166C13.7498 10.8768 14.1229 11.2499 14.5832 11.2499C15.0434 11.2499 15.4165 10.8768 15.4165 10.4166C15.4165 9.95635 15.0434 9.58325 14.5832 9.58325Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M7.55167 17.6256C5.58545 18.4597 3.42815 17.2569 2.99477 15.2849L2.80188 15.3599C2.54548 15.4596 2.25639 15.4264 2.02933 15.2711C1.80228 15.1157 1.6665 14.8584 1.6665 14.5833L1.6665 9.16659C1.6665 6.62223 2.7184 4.66703 4.31719 3.36431C5.89569 2.07812 7.96582 1.45825 9.99984 1.45825C12.0339 1.45825 14.104 2.07812 15.6825 3.36431C17.2813 4.66703 18.3332 6.62223 18.3332 9.16659V12.4999C18.3332 12.8344 18.1332 13.1364 17.8253 13.2671L7.55167 17.6256ZM9.90247 7.08896L3.45858 7.84706C3.73253 6.47175 4.43547 5.41782 5.36998 4.65636C6.60398 3.65088 8.28385 3.12492 9.99984 3.12492C11.7158 3.12492 13.3957 3.65088 14.6297 4.65636C15.8434 5.64531 16.6665 7.12761 16.6665 9.16659V11.9482L6.90075 16.0913C5.83543 16.5432 4.65792 15.7992 4.58658 14.6659L10.3019 12.4433C10.6222 12.3187 10.8332 12.0103 10.8332 11.6666V7.91659C10.8332 7.67861 10.7314 7.45199 10.5536 7.29386C10.3758 7.13572 10.1388 7.06115 9.90247 7.08896ZM9.1665 11.0965L3.33317 13.365L3.33317 9.53998L9.1665 8.85371L9.1665 11.0965Z"></path></svg>
                    <span className={style.type}>پیک فروشنده</span>
                    <span className={style.price}>۳۰۰۰ تومان</span>
                </div>
            </div>

            
        </Link>
    );
};
export default RestrantCard;