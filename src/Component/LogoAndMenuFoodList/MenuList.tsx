import { FC } from 'react';
import style from './MenuList.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { RestrantModel } from '../../Models/RestrantModel';
import { Link } from 'react-scroll';



interface PropsType{};

const MenuList:FC<PropsType> = () => {
    const currentRestrant=useSelector((state:RootState)=>state.restrants.currentRestrant) as RestrantModel
    
    
    
    return (
        <ul className={style.container}>
            {
            currentRestrant.menu && 
                currentRestrant.menu.map((item)=>{
                return    <Link to={item.id} spy={true} smooth={true} offset={-100} className={style.menuItem} activeClass={style.active} key={item.id} >{item.category}</Link>
                })
            }  
          
            
        </ul>
    );
};
export default MenuList;