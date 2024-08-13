import { ChangeEvent, FC, useState } from 'react';
import style from './SearchInput.module.scss';
import { useDispatch } from 'react-redux';
import { fetchSearchResultAction } from '../../Store/Action/fetchSearchResultAction';
import { AppDispatch } from '../../Store';

interface PropsType{};

const SearchInput:FC<PropsType> = () => {
    const [timer,setTimer]=useState<ReturnType<typeof setTimeout>>()
    const dispatch:AppDispatch=useDispatch()
    const searchHandler=(e:ChangeEvent<HTMLInputElement>)=>{
       
        clearTimeout(timer)

        const newTimer:ReturnType<typeof setTimeout>=setTimeout(()=>{
            if(e.target.value && e.target.value.length>=3){
                dispatch(fetchSearchResultAction(e.target.value))
            }
        },1000)
        setTimer(newTimer)
    }

    return (
        <input type="text" id='search' onChange={searchHandler} className={style.searchInput} autoFocus/>

    );
};
export default SearchInput;