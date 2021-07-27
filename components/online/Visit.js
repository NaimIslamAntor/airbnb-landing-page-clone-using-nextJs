
import {useRef, useState} from 'react';

import st from '../../styles/online/Visit.module.css'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import VisitCard from './VisitCard';

import ShowAll from './ShowAll';



const Visit = ({ heading, datas }) => {


  const visitSlideGetRef = useRef(null);

 

  const moveVisit = (signal) => {
  

    const slider =  visitSlideGetRef.current;
  
    const move = slider.clientWidth;

    const getScrollWIdth = slider.scrollWidth;
    
    const getScroll = slider.scrollLeft;

    const srcollEnd = getScrollWIdth - move;

    if(signal == "left"){

      if (getScroll == 0) {

        slider.scrollLeft += srcollEnd;

        return;
      }

      slider.scrollLeft -= move;
      return;
    }


    if (getScroll == srcollEnd) {

      slider.scrollLeft = 0;

      return;
    }
  
    slider.scrollLeft += move;
    
  
  
  }

    return (
        <div className={st.visitMain}>

<div className={st.headingAndArrows}>
  
  <div>
    
<h2 className={st.visitHeading}>{heading}</h2>
  </div>

<div className={st.arrows}>

<a href="#" className={st.showTextCount}>Show({datas.length})</a>

<button onClick={() => moveVisit("left")} className={`${st.move__btn} ${st.move__left}`}>
    <ArrowBackIosIcon className={st.icon__sizing}/></button>


    <button onClick={() => moveVisit("right")} className={`${st.move__btn} ${st.move__right}`} >
      <ArrowForwardIosIcon className={st.icon__sizing}/></button>


<a href="#" className={st.be_polite}> <ArrowForwardIosIcon className={st.icon__sizing_more}/></a>
</div>

</div>

          <div className={st.visitSliderContainer}>

          <div className={st.visitSliderInnerContainer} ref={visitSlideGetRef}>


{
  datas.map((data, index) => {

    return  <VisitCard
          key={index}
          videoSrc={data.videoSrc}
          videoType={data.videoType}
          img={data.img}
          rateAndHead={data.rateAndHead}
          Head={data.Head}
          priceAndFrom={data.priceAndFrom}
          soldOrNot={data.soldOrNot} />
  })}
  
       <ShowAll/>

          </div>

          </div>

        </div>
    )
}

export default Visit
