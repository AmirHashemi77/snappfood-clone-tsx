import { FC } from 'react';
import style from './Header.module.scss';
import {  useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { RootState } from '../../Store';
import SearchWrapper from './SearchWrapper';
import LogedInBtn from './LogedInBtn';
import NotLogedInBtns from './NotLogedInBtns';
import CategoryList from './CategoryList';

interface PropsType{};

const Header:FC<PropsType> = () => {
    const isAuthed=useSelector((state:RootState)=>state.auth.authed);
  
    const loc=useLocation();
    
    return (
        <header>
            <div className={style.container}>
                <div className={style.top}>
                <div className={style.addressAndLogo}>
                    <Link to='/'>
                            <img src="/images/icon.svg" alt="logo" /> 
                    </Link>
                    <div className={style.address}>
                        <svg width="23px" height="23px" viewBox="0 0 18 18" fill="#babac0"><path d="M3.22582 9.83268H1.50008C1.03984 9.83268 0.666748 9.45959 0.666748 8.99935C0.666748 8.53911 1.03984 8.16602 1.50008 8.16602H3.22582C3.59125 5.61127 5.61201 3.59052 8.16675 3.22509V1.49935C8.16675 1.03911 8.53984 0.666016 9.00008 0.666016C9.46032 0.666016 9.83342 1.03911 9.83342 1.49935V3.22509C12.3882 3.59052 14.4089 5.61127 14.7743 8.16602H16.5001C16.9603 8.16602 17.3334 8.53911 17.3334 8.99935C17.3334 9.45959 16.9603 9.83268 16.5001 9.83268H14.7743C14.4089 12.3874 12.3882 14.4082 9.83342 14.7736V16.4993C9.83342 16.9596 9.46032 17.3327 9.00008 17.3327C8.53984 17.3327 8.16675 16.9596 8.16675 16.4993V14.7736C5.61201 14.4082 3.59125 12.3874 3.22582 9.83268ZM9.00008 13.166C11.3013 13.166 13.1667 11.3005 13.1667 8.99935C13.1667 6.69816 11.3013 4.83268 9.00008 4.83268C6.69889 4.83268 4.83342 6.69816 4.83342 8.99935C4.83342 11.3005 6.69889 13.166 9.00008 13.166ZM9.00008 10.666C8.07961 10.666 7.33342 9.91982 7.33342 8.99935C7.33342 8.07887 8.07961 7.33268 9.00008 7.33268C9.92056 7.33268 10.6667 8.07887 10.6667 8.99935C10.6667 9.91982 9.92056 10.666 9.00008 10.666Z"></path></svg>
                        <div className={style.addressDetail}>
                            <h4 >آدرس انتخابی</h4>
                            <div>
                                   <small>تهران،جمالزاده،میدان انقلاب</small> 
                                   <svg xmlns="http://www.w3.org/2000/svg" width=".7rem" height="0.5625rem" viewBox="0 0 16 9" fill="#FF38AC" className={style.icon}><path d="M0.705389 0.294621C1.09466 -0.0946516 1.72569 -0.0949955 2.11539 0.293852L8 6.17001L13.8846 0.293853C14.2743 -0.0949953 14.9053 -0.0946514 15.2946 0.294621C15.6842 0.684194 15.6842 1.31582 15.2946 1.70539L8.70711 8.2929C8.31659 8.68342 7.68342 8.68342 7.2929 8.2929L0.705389 1.70539C0.315816 1.31582 0.315816 0.684194 0.705389 0.294621Z"></path></svg>
                            </div>
                        </div>
                    </div>
                   
                </div>
                        <SearchWrapper />
                           

                   
                         {isAuthed ? <LogedInBtn /> : <NotLogedInBtns />}
                            
                            

                </div>

                {loc.pathname==='/' && <CategoryList />}
               
            </div>
        </header>
    );
};
export default Header;