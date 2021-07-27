import { useRef, useState, useEffect } from 'react'
import NtwCard from './NtwCard';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import st from '../../styles/online/NtwContainer.module.css';



const NtwContainer = () => {

    const visitSlideGetRef = useRef(null);

    const [leftCheck, setLeftCheck] = useState(st.noClick);

    const [rightCheck, setRightCheck] = useState('');



    const trackNtwScroll = (e) => {
      const event = e.target;

      let { scrollLeft, scrollWidth, clientWidth }  = event;

      let totalScroll = scrollWidth - clientWidth;


      if (scrollLeft == 0) {

        setLeftCheck(st.noClick);

      }


      if (scrollLeft == totalScroll) {

        setRightCheck(st.noClick);
      }



    }



  const moveVisit = (signal) => {
  

    let slider =  visitSlideGetRef.current;
  
    let move = slider.clientWidth;


    if(signal == "left"){

       setRightCheck('');

      slider.scrollLeft -= move;

      return;
    }


   setLeftCheck('');
   slider.scrollLeft += move;

  
  
  }




    return (
        <div className={st.ntwContainer}>
      
      <div className={st.headAndArrows}>
            
        <h1 className={st.ntwHeading}>New this week</h1>

<div className={st.arrows}>


<button 

disabled={leftCheck == '' ? false : true}

onClick={() => moveVisit("left")}


className={`${st.move__btn} ${st.move__left} ${leftCheck}`}>
<ArrowBackIosIcon className={st.icon__sizing}/></button>


<button

disabled={rightCheck == '' ? false : true}

 onClick={() => moveVisit("right")}

className={`${st.move__btn} ${st.move__right} ${rightCheck}`} >
<ArrowForwardIosIcon className={st.icon__sizing}/></button>

</div>
      </div>


            <div className={st.ntwInnerContainer} onScroll={trackNtwScroll} ref={visitSlideGetRef}>

            <NtwCard  
            explainHead="Connect with olympians & parolympians"
            img="/images/ntw.webp"
            />

            <NtwCard  
            explainHead="Explore Japanese culture"
            img="/images/ntw2.webp"
            />

            <NtwCard  
            explainHead="Most popular around the world"
            img="/images/ntw3.webp"
            />

            <NtwCard  
            explainHead="Feed your wanderlust"
            img="/images/ntw5.webp"
            />

            <NtwCard  
            explainHead="Great for team buidling"
            img="/images/ntw4.webp"
            />

            <NtwCard  
            explainHead="Give an untraditional gift"
            img="/images/ntw5.webp"
            />

            <NtwCard  
            explainHead="Learn the secrets of successful hosting"
            img="/images/ntw5.webp"
            />

            <NtwCard  
            explainHead="Learn the secrets of successful hosting"
            img="/images/ntw5.webp"
            />

            <NtwCard  
            explainHead="Feed your wanderlust"
            img="/images/ntw5.webp"
            />


            <NtwCard  
            explainHead="Give an untraditional gift"
            img="/images/ntw5.webp"
            />


            </div>
        </div>
    )
}

export default NtwContainer
