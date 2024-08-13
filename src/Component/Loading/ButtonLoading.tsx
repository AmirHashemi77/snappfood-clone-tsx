import { FC } from 'react';
import style from './ButtonLoading.module.scss';



const ButtonLoading:FC = () => {
    return (
        <div className={style.loading}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        );
};
export default ButtonLoading;