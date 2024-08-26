import { FC } from 'react';
import style from './CategoryList.module.scss';
import CategoryItem from './CategoryItem';



const CategoryList:FC = () => {
    return (
        <ul className={style.categoryList}>
                    <CategoryItem categoryName='restrant' title='رستوران'/>
                    <CategoryItem categoryName='supermarket' title='سوپرمارکت'/>
                    <CategoryItem categoryName='cofe' title='کافه'/>
                    <CategoryItem categoryName='sweet' title='شیرینی'/>
                    <CategoryItem categoryName='bakery' title='نانوایی'/>
                    <CategoryItem categoryName='fruit' title='میوه'/>
                    <CategoryItem categoryName='meat' title='گوشت'/>
                    <CategoryItem categoryName='icecream' title='بستنی'/>
                    <CategoryItem categoryName='nut' title='آجیل'/>
                    <CategoryItem categoryName='other' title='دیگر'/>
                </ul>
    );
};
export default CategoryList;