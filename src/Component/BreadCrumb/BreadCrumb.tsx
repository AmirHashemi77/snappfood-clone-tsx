import { FC, useEffect, useState } from 'react';
import style from './BreadCrumb.module.scss';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { breadCrumbData } from '../../Helper/breadCrumbData';
import { sideBarCategory } from '../../Helper/sideBarCategory';
import { BreadCrumbModel, CategoryModel, SubCategoryModel } from '../../Models/CategoryModel';


type BreadCrumbArrType=(BreadCrumbModel | CategoryModel & {link:string} | SubCategoryModel | {id:string ; title:string} )



const BreadCrumb:FC = () => {
    const parmas =useParams<{category?:"restrant" | "cofe" | "bakery"; subcategory?:string ; twosubcategory?:string; restrantId?:string}>()
    const [breadCrumbArr,setBreadCrumbArr]=useState<BreadCrumbArrType[]>([])
    const currentRestrant=useSelector((state:RootState)=>state.restrants.currentRestrant)



    
    useEffect(()=>{
        
        if(parmas.category ){
            const currentCategory:BreadCrumbModel={...breadCrumbData.find((item)=>item.id === parmas.category), link:`/service/${parmas.category}`} as BreadCrumbModel
            setBreadCrumbArr([currentCategory])


            if( parmas.subcategory ){
                const currentSubCategory:CategoryModel & {link:string}={...sideBarCategory[parmas.category].find((item:CategoryModel)=>item.id===parmas.subcategory), link:`/service/${parmas.category}/${parmas.subcategory}`} as CategoryModel & {link:string}
              
               setBreadCrumbArr((prev)=>[...prev,currentSubCategory])
            }
            if(parmas.twosubcategory){
                const currentSubCategory:CategoryModel=sideBarCategory[parmas.category].find((item:CategoryModel)=>item.id===parmas.subcategory) as CategoryModel
                if(currentSubCategory.subCategory){
                    const currentTwoSubCategory:SubCategoryModel=currentSubCategory.subCategory.find((item:SubCategoryModel)=>item.id ===parmas.twosubcategory) as SubCategoryModel
                    setBreadCrumbArr((prev)=>[...prev,currentTwoSubCategory])
                    
                }
                
            }

        }
       
    },[parmas.category,parmas.subcategory,parmas.twosubcategory])




    useEffect(()=>{
        
            if(parmas.restrantId && currentRestrant && "id" in currentRestrant){
                const category={...breadCrumbData.find((item)=>item.id===currentRestrant.type),link:`/service/${currentRestrant.type}`} as BreadCrumbModel
                
                const restrantname={title:currentRestrant.title,id:currentRestrant.id};
                setBreadCrumbArr([category,restrantname])
                
            }

        
    },[parmas.restrantId,currentRestrant])




    return (
        <div className={style.container}>
            <Link to='/' className={style.breadCrumbItem}>اسنپ فود /</Link>
            {    
                breadCrumbArr.map((item:BreadCrumbArrType,index:number)=>{

                    return index === (breadCrumbArr.length -1 ) ?  <p key={item.id} className={style.lastBreadCrumbItem}>{item.title}</p> : <Link key={item.id} className={style.breadCrumbItem}  to={"link" in item ? item.link : ''}>{`${item.title} /`}</Link>
                       
                })
            }
        </div>
    );
};
export default BreadCrumb;