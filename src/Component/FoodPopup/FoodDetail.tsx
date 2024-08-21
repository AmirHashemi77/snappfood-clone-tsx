import { FC } from 'react';
import style from './FoodDetail.module.scss';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { useDispatch } from 'react-redux';
import { uiSliceAction } from '../../Store/Slice/uiSlice/uiSlice';
import { cartSliceAction } from '../../Store/Slice/cartSlice/cartSclice';
import { FoodItemModel } from '../../Models/RestrantModel';



const FoodDetail:FC = () => {
    const currentFood=useSelector((state:RootState)=>state.restrants.currentFood) as FoodItemModel
    const cartItems=useSelector((state:RootState)=>state.cart.items)
   
    const availableFood=cartItems.find((item)=>item.id===currentFood.id)
    
    const dispatch:AppDispatch=useDispatch()
    const foodPopUpHandle=()=>{
        dispatch(uiSliceAction.popUpHandler('food'))
    }
    const addToCartHandler=()=>{
        
        dispatch(cartSliceAction.addToCart({
            id:currentFood.id,
            title:currentFood.name,
            price:currentFood.price,
            totalPrice:currentFood.price,
            quantity:1
        }))
        
        
        
    }
    const removeCartHandler=()=>{
        dispatch(cartSliceAction.removeFromCart(currentFood.id))
      
        
    }
    return (
        <div className={style.container}>
                <button onClick={foodPopUpHandle} className={style.closeBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="0.875rem" height="0.875rem" viewBox="0 0 14 14" fill="#676A70"><path d="M8.41 7.00019L12.71 2.71019C12.8983 2.52188 13.0041 2.26649 13.0041 2.00019C13.0041 1.73388 12.8983 1.47849 12.71 1.29019C12.5217 1.10188 12.2663 0.996094 12 0.996094C11.7337 0.996094 11.4783 1.10188 11.29 1.29019L7 5.59019L2.71 1.29019C2.5217 1.10188 2.2663 0.996094 2 0.996094C1.7337 0.996094 1.4783 1.10188 1.29 1.29019C1.1017 1.47849 0.995908 1.73388 0.995908 2.00019C0.995908 2.26649 1.1017 2.52188 1.29 2.71019L5.59 7.00019L1.29 11.2902C1.19627 11.3831 1.12188 11.4937 1.07111 11.6156C1.02034 11.7375 0.994202 11.8682 0.994202 12.0002C0.994202 12.1322 1.02034 12.2629 1.07111 12.3848C1.12188 12.5066 1.19627 12.6172 1.29 12.7102C1.38296 12.8039 1.49356 12.8783 1.61542 12.9291C1.73728 12.9798 1.86799 13.006 2 13.006C2.13201 13.006 2.26272 12.9798 2.38458 12.9291C2.50644 12.8783 2.61704 12.8039 2.71 12.7102L7 8.41018L11.29 12.7102C11.383 12.8039 11.4936 12.8783 11.6154 12.9291C11.7373 12.9798 11.868 13.006 12 13.006C12.132 13.006 12.2627 12.9798 12.3846 12.9291C12.5064 12.8783 12.617 12.8039 12.71 12.7102C12.8037 12.6172 12.8781 12.5066 12.9289 12.3848C12.9797 12.2629 13.0058 12.1322 13.0058 12.0002C13.0058 11.8682 12.9797 11.7375 12.9289 11.6156C12.8781 11.4937 12.8037 11.3831 12.71 11.2902L8.41 7.00019Z"></path></svg>
                </button>
            <div className={style.main}>     
                <img className={style.foodImg} src={`/images/foodsImg/${currentFood.img}.jpeg`} alt="pizza" />
                <div className={style.description}>
                        <div className={style.title}>
                            <h4>{currentFood.name}</h4>
                            <div className={style.rate}>
                                <svg width="12" height="12" viewBox="0 1 12 12" fill="#FFCE00"><path fillRule="evenodd" clipRule="evenodd" d="M5.99984 9.62097L2.42572 11.5L3.10832 7.52016L0.216797 4.70163L4.21278 4.12098L5.99984 0.5L7.7869 4.12098L11.7829 4.70163L8.89136 7.52016L9.57395 11.5L5.99984 9.62097Z"></path></svg>
                                <span>{currentFood.rate}</span>
                            </div>
                        </div>
                        <p className={style.subtitle}>
                        {currentFood.ingredient}     
                        </p>
                        <div className={style.priceAndBtn}>
                                <p className={style.price}>
                                {currentFood.price}<span>تومان</span>
                                </p>
                                {!availableFood ? 
                                        <button onClick={addToCartHandler} className={style.addBtn}>افزودن</button> :
                                        <div className={style.buttons}>
                                        { availableFood.quantity &&  availableFood.quantity===1 ?
                                            <button onClick={removeCartHandler} className={style.deleteBtn}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="0.75rem" height="0.875rem" viewBox="0 0 12 14" fill="#9C9FA3" role="button"><path d="M2.66667 3.00456V2.33789C2.66667 1.23332 3.5621 0.337891 4.66667 0.337891H7.33333C8.4379 0.337891 9.33333 1.23332 9.33333 2.33789V3.00456H11.3333C11.7015 3.00456 12 3.30303 12 3.67122C12 4.03941 11.7015 4.33789 11.3333 4.33789H10.6667V11.6712C10.6667 12.7758 9.77124 13.6712 8.66667 13.6712H3.33333C2.22876 13.6712 1.33333 12.7758 1.33333 11.6712V4.33789H0.666667C0.298477 4.33789 0 4.03941 0 3.67122C0 3.30303 0.298477 3.00456 0.666667 3.00456H2.66667ZM4 3.00456H8V2.33789C8 1.9697 7.70152 1.67122 7.33333 1.67122H4.66667C4.29848 1.67122 4 1.9697 4 2.33789V3.00456ZM9.33333 4.33789H2.66667V11.6712C2.66667 12.0394 2.96514 12.3379 3.33333 12.3379H8.66667C9.03486 12.3379 9.33333 12.0394 9.33333 11.6712V4.33789ZM4 7.00456C4 6.63637 4.29848 6.33789 4.66667 6.33789C5.03486 6.33789 5.33333 6.63637 5.33333 7.00456V10.3379C5.33333 10.7061 5.03486 11.0046 4.66667 11.0046C4.29848 11.0046 4 10.7061 4 10.3379V7.00456ZM6.66667 7.00456C6.66667 6.63637 6.96514 6.33789 7.33333 6.33789C7.70152 6.33789 8 6.63637 8 7.00456V10.3379C8 10.7061 7.70152 11.0046 7.33333 11.0046C6.96514 11.0046 6.66667 10.7061 6.66667 10.3379V7.00456Z"></path></svg>
                                            </button> :
                                            <button onClick={removeCartHandler} className={style.minusBtn}>
                                                <svg width="10" height="10" viewBox="0 0 12 2" fill="#FF00A6" xmlns="http://www.w3.org/2000/svg"><path d="M1 2C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H11C11.5523 0 12 0.447715 12 1C12 1.55228 11.5523 2 11 2H1Z"></path></svg>
                                            </button>
                                        }
                                        <p className={style.num}>{availableFood.quantity}</p>
                                        <button onClick={addToCartHandler} className={style.plusBtn}>
                                            <svg width="10" height="10" viewBox="0 0 12 12" fill="#FF00A6"><path d="M7 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H7V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H5V1C5 0.447715 5.44772 0 6 0C6.55228 0 7 0.447715 7 1V5Z"></path></svg>
                                        </button>
                                    </div>
                                }           
                        </div>
                </div>
                
            </div>

        </div>
    );
};
export default FoodDetail;