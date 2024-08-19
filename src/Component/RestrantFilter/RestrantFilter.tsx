import { FC } from 'react';
import SideBarItemWrapper from '../RestrantList/SideBarItemWrapper';
import RestrantFilterItem from './RestrantFilterItem';


interface PropsType{};

const RestrantFilter:FC<PropsType> = () => {
    return (
        <SideBarItemWrapper>
            <RestrantFilterItem title='دارای کپن'/>
            <RestrantFilterItem title='دارای تخفیف'/>
            <RestrantFilterItem title='ارسال اکسپرس'/>
            <RestrantFilterItem title='رستوران های به صرفه'/>
       
        </SideBarItemWrapper>
    );
};
export default RestrantFilter;