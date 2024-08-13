import { FC } from 'react';
import style from './CitySection.module.scss';
import { city } from '../../Helper/city';
import { Link } from 'react-router-dom';


const CitySection:FC = () => {
    return (
        <div className={style.container}>
            <h5 className={style.title}>اسنپ‌فود در شهرهای ایران</h5>
            <div className={style.cities}>
                    {city.map((item,index)=>{
                    return    <Link to="" key={index} className={style.city}>{item}</Link>
                    })}
            </div>
            
        </div>
    );
};
export default CitySection;