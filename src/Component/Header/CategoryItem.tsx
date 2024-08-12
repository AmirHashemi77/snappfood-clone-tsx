import { FC } from 'react';
import style from './CategoryItem.module.scss';
import { Link } from 'react-router-dom';

interface PropsType{
    title:string;
    categoryName:string
};

const CategoryItem:FC<PropsType> = ({categoryName,title}) => {
    return (
        <li>
            <Link className={style.categoryItem} to={`/service/${categoryName}`} >
                <img src={`/images/category-icon/${categoryName}.png`} alt={categoryName} />
                <p>{title}</p>
            </Link>
         </li>
    );
};
export default CategoryItem;