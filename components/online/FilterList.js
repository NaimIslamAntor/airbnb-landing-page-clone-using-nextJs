
import { useState, useRef } from 'react';

import st from '../../styles/online/FilterList.module.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const FilterList = ({ status, btns, btnsStatus }) => {



    const scrollAbleDiv = useRef(null);

    const [firstBtn, setFirstBtn] = useState(false);


    const [secBtn, setsecBtn] = useState(true);


    const monitorScroll = (e) => {
        const { scrollLeft, clientWidth, scrollWidth } = e.target;


        console.log(e)

        let scrollLeftEnd = (scrollWidth - clientWidth);

        scrollLeft > 0 ? setFirstBtn(true) : setFirstBtn(false);

        scrollLeftEnd == scrollLeft ? setsecBtn(false) : setsecBtn(true);

       
    }


    const moveFilterList = (backwardOrForward) => {

        const elementObject = scrollAbleDiv.current;

        let { clientWidth } = elementObject;

        let thirdOfOne = (clientWidth / 3) + 100;

        clientWidth -= thirdOfOne;

        if(backwardOrForward === null){
            elementObject.scrollLeft -= clientWidth;
            return;
        }

        elementObject.scrollLeft += clientWidth;



    }

    return (
       
       <div className={st.list__container} style={status}>

{
    firstBtn ? <button onClick={() => moveFilterList(null)} className={`${st.move__btn} ${st.move__left}`} style={btnsStatus}>
    <ArrowBackIosIcon className={st.icon__sizing}/></button> : ''

}

<div className={st.filter__listdiv} ref={scrollAbleDiv} onScroll={monitorScroll}>

{
    btns.map(btn =>  <button data-url={btn.url} className={st.list__btn}>{btn.text}</button>)
}


  </div>


  {
      secBtn ?  <button onClick={() => moveFilterList('-')} className={`${st.move__btn} ${st.move__right}`} style={btnsStatus}>
      <ArrowForwardIosIcon className={st.icon__sizing}/></button> : ''

  }
 
  </div>

    )
}

export default FilterList
