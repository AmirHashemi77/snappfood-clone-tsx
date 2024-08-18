import { FC, useEffect, useState } from 'react';
import style from './GroupingItem.module.scss';
import { SubCategoryModel } from '../../Models/CategoryModel';
import { NavLink } from 'react-router-dom';

interface PropsType{
    title:string;
    id:string;
    img:string;
    category:string | undefined;
    subcategory:string | undefined;
    hasSubCategory:SubCategoryModel[] | boolean ; 
    menuNum:number
};

const GroupingItem:FC<PropsType> = ({title,id,img,category,subcategory,hasSubCategory,menuNum}) => {
    const [url,setUrl]=useState<string>('')
    useEffect(()=>{
        if(category && !subcategory){
            setUrl(`/service/${category}/${id}`);
        }
        if(subcategory && menuNum===2){
            
            setUrl(`/service/${category}/${subcategory}/${id}`);

        }
    },[category,subcategory,id,menuNum])

    return (
        <NavLink to={url} className={({isActive})=>isActive ? style.activeLink : style.unActiveLink}>
            <div className={style.picAndName}>
                <img src={`/images/sideBarCategoryPic/${img}.png`} alt={id} />
                <p>{title}</p>
            </div>
           {hasSubCategory &&  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 9 16" fill="#9994"><path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path></svg>}
            
        </NavLink>
    );
};
export default GroupingItem;