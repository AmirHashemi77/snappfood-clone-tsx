import { FC } from 'react';
import style from './FoodsCartContainer.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import FoodsCartItem from './FoodsCartItem';



const FoodsCartContainer:FC = () => {
    const cartItems=useSelector((state:RootState)=>state.cart.items)
    return (
        <div className={style.container}>
            {
                cartItems.map((item)=>(

                        <FoodsCartItem key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity}/>

                ))
            }
           
        </div>
    );
};
export default FoodsCartContainer;