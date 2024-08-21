import { FC } from 'react';
import style from './FoodListContainer.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { RestrantModel } from '../../Models/RestrantModel';
import FoodListCategory from './FoodListCategory';



const FoodListContainer:FC= () => {
    const currentRestrant=useSelector((state:RootState)=>state.restrants.currentRestrant) as RestrantModel
    

    
    return (
        <div className={style.container}>
            {
                currentRestrant.menu &&
                currentRestrant.menu.map((item)=>(
                    <FoodListCategory  key={item.id} id={item.id} title={item.category} foods={item.foods} />

                ))
            }
        </div>
    );
};
export default FoodListContainer;