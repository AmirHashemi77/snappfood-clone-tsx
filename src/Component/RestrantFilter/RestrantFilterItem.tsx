import { FC } from 'react';
import style from './RestrantFilterItem.module.scss';

interface PropsType{
    title:string
};

const RestrantFilterItem:FC<PropsType> = ({title}) => {
    return (
        <div>
             <div className={style.container}>
            <label className={style.title}>{title}</label>
            <input type="checkbox"  className={style.checkboxInp}/>
        </div>
        </div>
    );
};
export default RestrantFilterItem;