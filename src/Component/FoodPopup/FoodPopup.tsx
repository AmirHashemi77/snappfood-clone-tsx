import { FC } from 'react';
import style from './FoodPopup.module.scss';
import FoodDetail from './FoodDetail';
import Comments from '../Comments/Comments';
import CommentsItem from '../Comments/CommentsItem';



const FoodPopup:FC = () => {
   return(
        <>
        <div className={style.backDrop}></div>
        <div className={style.container}>
                <FoodDetail/>
                <Comments>
                    <CommentsItem/>
                    <CommentsItem/>
                    <CommentsItem/>
                    <CommentsItem/>
                </Comments>
            </div>
        </>
   )
};
export default FoodPopup;