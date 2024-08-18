import { FC, MouseEvent, useRef } from 'react';
import style from './RestrantPriceFilter.module.scss';
import SideBarItemWrapper from '../RestrantList/SideBarItemWrapper';



const RestrantPriceFilter:FC = () => {
    const filter=useRef<HTMLDivElement>(null);
    const setActive=(e:MouseEvent<HTMLDivElement>)=>{
        if(filter.current){

            const filterItem=filter.current.children
            
            for(let n=0 ; n<=3 ; n++){
                filterItem[n].classList.remove(style.active);
                const element=e.target as HTMLElement
                element.classList.add(style.active);
    
            }
        }
       
        
    }
    return (
       <SideBarItemWrapper>
        <div className={style.container}>
            <h6 className={style.title}>کلاس قیمتی</h6>
            <div ref={filter} className={style.filter}>
                <div onClick={setActive} className={`${style.item} ${style.active}`}>همه</div>
                <div onClick={setActive} className={style.item}>اقتصادی</div>
                <div onClick={setActive} className={style.item}>متوسط</div>
                <div onClick={setActive} className={style.item}>گران</div>
            </div>
        </div>
       </SideBarItemWrapper>
    );
};

export default RestrantPriceFilter;