import { FC, useEffect, useState } from 'react';
import style from './RestrantSort.module.scss';
import SortItem from './SortItem';



const RestrantSort:FC = () => {
    const [activeMenu,setActiveMenu]=useState<boolean>(false);
    const [sortingValue,setSortingValue]=useState<string>('');
    const openHandler=()=>{
        
        setActiveMenu((activeMenu)=>!activeMenu)
    }
    useEffect(()=>{
        document.onclick=()=>{
            if(sortingValue){
                setActiveMenu(false)

            }
        }
    },[sortingValue])
    
    return (
        <div className={style.container}>
            <p className={style.defultValue}>
                {sortingValue ? sortingValue : 'به ترتیب پیش فرض'}
            </p>
            <div className={style.buttons}>
               {sortingValue &&  <button onClick={()=>setSortingValue('')} className={style.clearBtn}>
                <svg height="18" width="18" viewBox="0 -3 20 20" fill='gray' aria-hidden="true" focusable="false" ><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg>
                </button>}
                <button onClick={openHandler} className={style.openBtn}>
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="gray" xmlns="http://www.w3.org/2000/svg"><path d="M4 4.5L0 0.5L8 0.5L4 4.5Z" fill="#3A3D42"></path></svg>
                </button>
            </div>
           {activeMenu &&  
           <ul className={style.menu}>
                    <SortItem setSortingValue={setSortingValue} title='بالاترین امتیاز'/>
                    <SortItem setSortingValue={setSortingValue} title='نزدیک ترین'/>
                    <SortItem setSortingValue={setSortingValue} title='جدیدترین'/>
                    <SortItem setSortingValue={setSortingValue} title='ارزان ترین'/>
                    <SortItem setSortingValue={setSortingValue} title='عملکرد کلی'/>
                    <SortItem setSortingValue={setSortingValue} title='گران ترین'/>
                    
            </ul>
            }
            
        </div>
    );
};
export default RestrantSort;