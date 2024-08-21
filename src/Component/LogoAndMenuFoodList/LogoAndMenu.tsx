import { FC } from 'react';
import style from './LogoAndMenu.module.scss';
import RestrantParticulars from './RestrantParticulars';
import MenuList from './MenuList';


const LogoAndMenu:FC = () => {
  

    return (
        <div className={style.container}>
            <RestrantParticulars/>
            <MenuList/>
        </div>
    );
};
export default LogoAndMenu;