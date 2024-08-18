import { FC, useEffect, useRef, useState } from 'react';
import style from './Restrants.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { useSelector } from 'react-redux';
import { RestrantModel } from '../../Models/RestrantModel';
import { fetchRestrantListData } from '../../Store/Action/restrantListAction';
import Header from '../../Component/Header/Header';
import CategoryList from '../../Component/Header/CategoryList';
import BreadCrumb from '../../Component/BreadCrumb/BreadCrumb';
import Loading from '../../Component/Loading/Loading';
import Footer from '../../Component/Footer/Footer';
import RestrantSort from '../../Component/RestrantSortSection/RestrantSort';
import RestrantCard from '../../Component/RestrantSlider/RestrantCard';

interface PropsType{};

const Restrants:FC<PropsType> = () => {
  const sideBar=useRef<HTMLDivElement>(null);
  const parmas=useParams()
  const dispatch:AppDispatch=useDispatch();
  const restrantListData=useSelector((state:RootState)=>state.restrants.restrantListArr);
  const [restrantList,setRestrantList]=useState<RestrantModel[]>([])
  const loading=useSelector((state:RootState)=>state.ui.showLoading);
  window.onwheel=(e)=>{
      if(e.deltaY>0 && sideBar.current){
          sideBar.current.scrollBy(0,sideBar.current.offsetHeight)
   }else if(e.deltaY<0 && sideBar.current){
       sideBar.current.scrollBy(0,-sideBar.current.offsetHeight)
      }
   
   }
  
  useEffect(()=>{
    if(parmas.category){
      dispatch(fetchRestrantListData(parmas.category))
    }
  },[parmas.category,dispatch])
  useEffect(()=>{
      if (parmas.category && !parmas.subcategory && !parmas.twosubcategory) {
         setRestrantList(restrantListData)
     }
     if (parmas.subcategory && !parmas.twosubcategory) {
        const filteredList= restrantListData.filter((item)=>item.filterCategory.includes(parmas.subcategory ?  parmas.subcategory : "")===true); 
        setRestrantList(filteredList)
     }
     if (parmas.twosubcategory) {
      const filteredList= restrantListData.filter((item)=>item.filterCategory.includes(parmas.twosubcategory ? parmas.twosubcategory : "")===true);
     
          setRestrantList(filteredList)   
     }
  },[parmas.category,parmas.subcategory,parmas.twosubcategory,restrantListData])
  
  
  
  return (
      <>
          <Header/>
          <CategoryList/>
          {restrantList.length>0 && <BreadCrumb/>}

         {restrantList.length===0 ?
          <div className={style.noItem}>متاسفانه آیتمی پیدا نشد</div> :
          <div className={style.main}>
              <RestrantSort/>
              <div className={style.flexContainer}>
                     
                          <div ref={sideBar} className={style.sideBar}>
                          
                          { 
                         ( parmas.category==='restrant' || parmas.category==='cofe' ||parmas.category==='bakery') && 
                          <RestrantListSideBar />
                          }
                          <div className={style.priceFilter}><RestrantPriceFilter/></div>
                          <RestrantFilter/>
                          </div>
                      
                      {
                          !loading ? <RestrantList> 
                                          {
                                              restrantList.map((item)=>(
                                                  <RestrantCard key={item.id} id={item.id} title={item.title} subtitle={item.subtitle} rate={item.rate} logo={item.logo} image={item.image} />
                                              ))
                                          }   
                                      </RestrantList> :

                                      <div className={style.loadingWrapper}><Loading/></div>
                      }
              </div>
          </div> 
          }
          <Footer/>

      </>
     
  );
};
export default Restrants;