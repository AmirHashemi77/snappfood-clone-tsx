import { FC } from 'react';
import style from './Loading.module.scss';



const Loading:FC= () => {
    return (
        <div className={style.loading}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
export default Loading;