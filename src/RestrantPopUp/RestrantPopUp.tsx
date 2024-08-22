import { FC } from 'react';
import style from './RestrantPopUp.module.scss';
import Comments from '../Component/Comments/Comments';
import CommentsItem from '../Component/Comments/CommentsItem';
import RestrantDetails from './RestrantDetails';
import RateSection from './RateSection';



const RestrantPopUp:FC = () => {
    return (
        <>
        <div className={style.backDrop}></div>
        <div className={style.container}>
                <RestrantDetails/>
                <div className={style.wrap}>
                    <RateSection/>
                    <Comments>
                        <CommentsItem/>
                        <CommentsItem/>
                        <CommentsItem/>
                        <CommentsItem/>
                        <CommentsItem/>
                    </Comments>

                </div>
        </div>
        </>
    );
};
export default RestrantPopUp;