import { Dispatch, FC } from 'react';
import style from './SortItem.module.scss';
import { Link } from 'react-router-dom';

interface PropsType{
    title:string;
    setSortingValue:Dispatch<React.SetStateAction<string>>
};

const SortItem:FC<PropsType> = ({setSortingValue,title}) => {
    return (
        <li onClick={()=>setSortingValue(title)} className={style.menuItem}><Link to=''>{title}</Link></li>

    );
};
export default SortItem;