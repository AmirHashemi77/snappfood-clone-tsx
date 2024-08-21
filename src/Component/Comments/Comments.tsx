import { FC, PropsWithChildren } from 'react';
import style from './Comments.module.scss';



const Comments:FC<PropsWithChildren> = ({children}) => {
    return (
        <div className={style.container}>
            <h4 className={style.title}>نظرات کاربران</h4>
            <div className={style.commentsWrapper}>
                    {children}
            </div>
            
        </div>
    );
};
export default Comments;