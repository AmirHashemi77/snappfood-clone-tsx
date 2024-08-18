import { FC, useEffect, useState } from 'react';
import style from './RestrantListSideBar.module.scss';
import { useParams } from 'react-router-dom';
import { sideBarCategory } from '../../Helper/sideBarCategory';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { RestrantModel } from '../../Models/RestrantModel';
import { CategoryModel } from '../../Models/CategoryModel';



const RestrantListSideBar:FC = () => {
    const params=useParams()
    const [categoryData,setCategoryData]=useState([])
    const [isSubCategoryMenu,setIsSubCategoryMenu]=useState(false)
    const [groupTitle,setGroupTitle]=useState({
        title:'همه دسته بندی ها',
        link:`/service/${params.category}`
    })

    useEffect(()=>{
        if(params.category && sideBarCategory[params.category]){
            if(params.category){
                setCategoryData(sideBarCategory[params.category]);
                setIsSubCategoryMenu(false);
            }
           
            if(params.subcategory){
                const subcategoryItem= sideBarCategory[params.category].find((item:CategoryModel)=>item.id===params.subcategory)
                if(subcategoryItem && subcategoryItem.subCategory){
                    setCategoryData(subcategoryItem.subCategory);
                    setIsSubCategoryMenu(true);
                    
                }
                
                
            }

            
        }
       
        
    },[params.category,params.subcategory,categoryData])
    useEffect(()=>{
            switch (params.subcategory) {
                case 'fastfood':
                    setGroupTitle({
                        title:'همه فست فود ها',
                        link:`/service/restrant/fastfood`
                    })
                    
                    break;
                case 'irani':
                   
                    setGroupTitle({
                        title:'همه ایرانی ها',
                        link:`/service/restrant/irani`
                    })
                    break;
                case 'kebab':
                    setGroupTitle({
                        title:'همه کباب ها',
                        link:`/service/restrant/kebab`
                    })
                    break;
                case 'food':
                    setGroupTitle({
                        title:'همه غذا ها',
                        link:`/service/cofe/food`
                    })
                    break;
                case 'warmdrink':
                    setGroupTitle({
                        title:'همه نوشیدنی های گرم',
                        link:`/service/cofe/warmdrink`
                    })
                    break;
                case 'colddrink':
                    setGroupTitle({
                        title:'همه نوشیدنی های سرد',
                        link:`/service/cofe/colddrink`
                    })
                    break;
               
                default:
                    setGroupTitle({
                        title:'همه دسته بندی ها',
                        link:`/service/${params.category}`
                    })
                    break;
            }
            
    },[params.subcategory,params.category])

   
   

    return (
   
     
        <>
        {categoryData.length>0 &&

            <SideBarItemWrapper>
            {isSubCategoryMenu && 
             <Link to={`/service/${params.category}`} className={style.backBtn}>
             <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 9 16" fill="var(--sf-carbon-main)"><path d="M0.294622 15.2946C-0.0946505 14.9053 -0.0949944 14.2743 0.293854 13.8846L6.17001 8L0.293852 2.11539C-0.0949964 1.72569 -0.0946506 1.09466 0.294622 0.705388C0.684195 0.315815 1.31582 0.315815 1.70539 0.705388L8.2929 7.2929C8.68342 7.68342 8.68342 8.31659 8.2929 8.70711L1.70539 15.2946C1.31582 15.6842 0.684195 15.6842 0.294622 15.2946Z"></path></svg>
             <span>بازگشت</span>
             </Link>
             }
             
         <div className={style.container}>
             <NavLink to={groupTitle.link} end className={({isActive})=>isActive ? style.activeLink : style.unActiveLink}>{groupTitle.title}</NavLink>
             {categoryData.map((item:CategoryModel)=>(
                 <GroupingItem key={item.id} id={item.id} title={item.title} menuNum={item.menuNum} img={item.img} hasSubCategory={item.subCategory} category={params.category} subcategory={params.subcategory} />
             ))}
 
             
         </div>
 
         </SideBarItemWrapper> 
        }
        </>

    );
};
export default RestrantListSideBar;