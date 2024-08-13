import { FC } from 'react';
import style from './RestrantCategory.module.scss';
import { headerRestrantCategoryData } from '../../Helper/headerRestrantCtegoryData';
import RestrantCategoryItem from './RestrantCategoryItem';



const RestrantCategory:FC = () => {
    return (
        <div className={style.container}>   
            <h5 className={style.title}>دسته بندی ها</h5>
            <div className={style.itemWrapper}>
                {headerRestrantCategoryData.map((item)=>{
                return    <RestrantCategoryItem key={item.name} url={item.url} name={item.name} title={item.title}/>

                })} 
            </div>
        </div>
        
    );
};
export default RestrantCategory;