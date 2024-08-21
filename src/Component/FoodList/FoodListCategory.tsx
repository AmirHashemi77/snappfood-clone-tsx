import { FC } from 'react';
import style from './FoodListCategory.module.scss';
import { FoodItemModel } from '../../Models/RestrantModel';
import FoodItem from './FoodItem';

interface PropsType{
    id:string;
    title:string;
    foods:FoodItemModel[]
};

const FoodListCategory:FC<PropsType> = ({foods,id,title}) => {
  
    

    return (
        <div id={id}  className={style.container}>
            <div className={style.title}>
                <p>{title}</p>
            </div>
            <div className={style.foodList}>
                {foods.map((item)=>(
                    <FoodItem key={item.id} id={item.id}  price={item.price} name={item.name} ingredient={item.ingredient} img={item.img} rate={item.rate} comments={item.comments}/>

                ))}
                    
            </div>
        </div>
    );
};
export default FoodListCategory;