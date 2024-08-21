import { FC, useEffect } from 'react';
import style from './FoodList.module.scss';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uiSliceAction } from '../../Store/Slice/uiSlice/uiSlice';
import Header from '../../Component/Header/Header';
import BreadCrumb from '../../Component/BreadCrumb/BreadCrumb';
import Footer from '../../Component/Footer/Footer';
import { fetchCurrentRestrant } from '../../Store/Action/currentRestrantAction';
import { fetchCartData } from '../../Store/Action/fetchCartData';
import SubmitAlert from '../../Component/SubmitAlert/SubmitAlert';
import LogoAndMenu from '../../Component/LogoAndMenuFoodList/LogoAndMenu';
import FoodListContainer from '../../Component/FoodList/FoodListContainer';
import FoodPopup from '../../Component/FoodPopup/FoodPopup';



const FoodList:FC = () => {
  
  const showFoodPopUp=useSelector((state:RootState)=>state.ui.showFoodPopUp)
  const showRestrantPopUp=useSelector((state:RootState)=>state.ui.showRestrantPopUp)
  const showSubmitAlert=useSelector((state:RootState)=>state.ui.showSubmitAlert)
  const currentRestrant=useSelector((state:RootState)=>state.restrants.currentRestrant)
  const parmas=useParams();
  const dispatch:AppDispatch=useDispatch();
 
  useEffect(()=>{
    if(parmas.restrantId){
      dispatch(fetchCurrentRestrant(parmas.restrantId));
      dispatch(fetchCartData(parmas.restrantId));
      dispatch(uiSliceAction.inActiveSearchInput());
    }

    
  },[parmas.restrantId,dispatch])
  
    return (
        <>
          <Header/>
          {showSubmitAlert && <SubmitAlert/>}
          {showFoodPopUp && <FoodPopup/>}
          {showRestrantPopUp && <RestrantPopUp/>}
          <div className={style.container}>
            {currentRestrant && currentRestrant.id ?
              <>
                <div className={style.breadCrumbWrapper}>
              <BreadCrumb/>
            </div>
            <div className={style.main}>
                <div className={style.flexContainer}>
                        <div className={style.logoAndFoodList}>
                          <LogoAndMenu/> 
                          <FoodListContainer/> 

                        </div>
                        <CartContainer/>
                </div>


            </div>
              </> :
              <p className={style.noItem}>آیتم مورد نظر یافت نشد</p>
            }
            <Footer/>

          </div>
        </>
    );
};
export default FoodList;