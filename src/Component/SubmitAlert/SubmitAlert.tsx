import { FC } from 'react';
import style from './SubmitAlert.module.scss';



const SubmitAlert:FC = () => {
    return (
        <>
            <div className={style.backDrop}></div>
            <div className={style.container}>
                <p className={style.text}>سفارش شما با موفقیت ثبت شد</p>
            </div>
        </>
    );
};
export default SubmitAlert;