import { FC, MouseEvent, useEffect, useRef, useState } from 'react';
import style from './Slider.module.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../Store';
import { Link } from 'react-router-dom';
import RestrantCard from './RestrantCard';
import { RestrantModel } from '../../Models/RestrantModel';

interface PropsType{
    tag:string;
    title:string
};

const Slider:FC<PropsType> = ({tag,title}) => {
    const sliderEl=useRef<HTMLDivElement>(null)
    const dipatch:AppDispatch=useDispatch()
    const loading=useSelector((state:RootState)=>state.ui.showLoading);
    const [sliderItems,setSliderItems]=useState<RestrantModel[]>([])
   
    let isDown:boolean=false;
    let startX:number;
    let scrollLeft:number;

    


       
        useEffect(()=>{
            // dipatch(fetchSliderData(setSliderItems,tag))
            
        },[dipatch,tag])


              
  

    const onMouseDown=(e:MouseEvent<HTMLDivElement>)=>{
        if(sliderEl.current){
            isDown=true;
            startX = e.pageX - sliderEl.current.offsetLeft;
            scrollLeft= sliderEl.current.scrollLeft;
        }
    }
    const onMouseUp=()=>{
        isDown=false;
    }
    const onMouseLeave=()=>{
        isDown=false
    }
    const onMouseMove=(e:MouseEvent<HTMLDivElement>)=>{
        if(!isDown){return}
        e.preventDefault();
        if(sliderEl.current){
            const x=e.pageX -  sliderEl.current.offsetLeft;
            const walk=(x - startX)*5;
            sliderEl.current.scrollLeft=scrollLeft-walk
        }
    }
    
    const next=()=>{
        if(sliderEl.current){
            const sliderWidth=sliderEl.current.getBoundingClientRect().width;
            sliderEl.current.scrollLeft+=sliderWidth;
        }

    }
    const prev=()=>{
        if(sliderEl.current){
            const sliderWidth=sliderEl.current.getBoundingClientRect().width;
            sliderEl.current.scrollLeft-=sliderWidth;
        }
    
    }

    return (
        <>
     {
        !loading && <div className={style.container}>
        <button onClick={next} className={style.nextBtn}><svg xmlns="http://www.w3.org/2000/svg" width="0.5625rem" height="1rem" viewBox="0 0 9 16" fill="#FF00A6"><path d="M0.294622 15.2946C-0.0946505 14.9053 -0.0949944 14.2743 0.293854 13.8846L6.17001 8L0.293852 2.11539C-0.0949964 1.72569 -0.0946506 1.09466 0.294622 0.705388C0.684195 0.315815 1.31582 0.315815 1.70539 0.705388L8.2929 7.2929C8.68342 7.68342 8.68342 8.31659 8.2929 8.70711L1.70539 15.2946C1.31582 15.6842 0.684195 15.6842 0.294622 15.2946Z"></path></svg></button>
        <button onClick={prev} className={style.prevBtn}><svg xmlns="http://www.w3.org/2000/svg" width="0.5625rem" height="1rem" viewBox="0 0 9 16" fill="#FF00A6"><path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path></svg></button>
        <div className={style.titleAndLink}>
            <h4 className={style.title}>{title}</h4>
            <Link to='' className={style.more}> <span>مشاهده همه</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="0.5625rem" height="1rem" viewBox="0 0 9 16" fill="#00B862"><path d="M8.70539 15.2946C9.09466 14.9053 9.095 14.2743 8.70615 13.8846L2.83 8L8.70615 2.11539C9.095 1.72569 9.09466 1.09466 8.70539 0.705388C8.31581 0.315815 7.68419 0.315815 7.29462 0.705388L0.707108 7.2929C0.316584 7.68342 0.316584 8.31659 0.707108 8.70711L7.29462 15.2946C7.68419 15.6842 8.31581 15.6842 8.70539 15.2946Z"></path></svg>
            
            </Link>
        </div>
        <div onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseLeave={onMouseLeave} onMouseMove={onMouseMove} className={style.slider} ref={sliderEl}>
            {
                sliderItems.map((item)=>(
                    <RestrantCard key={item.id} id={item.id} title={item.title} subtitle={item.subtitle} rate={item.rate} logo={item.logo} image={item.image} />

                ))
            }
        </div>
        
    </div>
     }
        </>
    );
};
export default Slider;