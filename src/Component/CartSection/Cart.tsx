import { FC } from 'react';
import style from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartSliceAction } from '../../Store/Slice/cartSlice/cartSclice';
import { RootState } from '../../Store';
import FoodsCartContainer from './FoodsCartContainer';
import TotalContainer from './TotalContainer';
import CartButton from './CartButton';



const Cart:FC= () => {
    const totalQuantity=useSelector((state:RootState)=>state.cart.totalQuantity)
    const dispatch=useDispatch()
    const clearAllHandler=()=>{
        dispatch(cartSliceAction.clearAll())
    }
  
    return (
        <div className={style.container}>
            <div className={style.header}>
                <div className={style.title}>
                    <p className={style.number}>سبد خرید <span >{`(${totalQuantity})`}</span></p>
                </div>
                <button onClick={clearAllHandler} className={style.clearBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="0.75rem" height="0.875rem" viewBox="0 -0.7 12 14" fill="#FA284B" role="button" tabIndex={-1}><path d="M2.66667 3.00456V2.33789C2.66667 1.23332 3.5621 0.337891 4.66667 0.337891H7.33333C8.4379 0.337891 9.33333 1.23332 9.33333 2.33789V3.00456H11.3333C11.7015 3.00456 12 3.30303 12 3.67122C12 4.03941 11.7015 4.33789 11.3333 4.33789H10.6667V11.6712C10.6667 12.7758 9.77124 13.6712 8.66667 13.6712H3.33333C2.22876 13.6712 1.33333 12.7758 1.33333 11.6712V4.33789H0.666667C0.298477 4.33789 0 4.03941 0 3.67122C0 3.30303 0.298477 3.00456 0.666667 3.00456H2.66667ZM4 3.00456H8V2.33789C8 1.9697 7.70152 1.67122 7.33333 1.67122H4.66667C4.29848 1.67122 4 1.9697 4 2.33789V3.00456ZM9.33333 4.33789H2.66667V11.6712C2.66667 12.0394 2.96514 12.3379 3.33333 12.3379H8.66667C9.03486 12.3379 9.33333 12.0394 9.33333 11.6712V4.33789ZM4 7.00456C4 6.63637 4.29848 6.33789 4.66667 6.33789C5.03486 6.33789 5.33333 6.63637 5.33333 7.00456V10.3379C5.33333 10.7061 5.03486 11.0046 4.66667 11.0046C4.29848 11.0046 4 10.7061 4 10.3379V7.00456ZM6.66667 7.00456C6.66667 6.63637 6.96514 6.33789 7.33333 6.33789C7.70152 6.33789 8 6.63637 8 7.00456V10.3379C8 10.7061 7.70152 11.0046 7.33333 11.0046C6.96514 11.0046 6.66667 10.7061 6.66667 10.3379V7.00456Z"></path></svg>
                </button>
                
            </div>
            <FoodsCartContainer/>
            <TotalContainer/>
            <CartButton/>

            

        </div>
    );
};
export default Cart;