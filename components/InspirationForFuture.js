import {useState, useRef, useEffect} from 'react';
import st from '../styles/InspirationForFuture.module.css';
import ITabContent from './ITabContent';
import { DestOfArtsAndCul, DestForOutAdven, OutCabin, BeachDest, PopDest } from './ITabDep';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Footer from './Footer';



const InspirationForFuture = ({ inspirationHeading }) => {

    const [tabContent, setTabContent] = useState(DestOfArtsAndCul);

    const [leftscrollBtn, setLeftScrollBtn] = useState(false);
    const [rightscrollBtn, setRightScrollBtn] = useState(true);

    //const [tabHeight, setTabHeight] = useState('auto');

    const tabButtons = useRef("");

   const tabTopAndBottom = useRef("");


    const activeChanger = () => {
        const buttons = Array.from(tabButtons.current.children);

        buttons.forEach(button => button.classList.contains(st.active__tab) ? button.classList.remove(st.active__tab) : '');
        
    }

    
    /*
    *switchTabs function fires when tabButtons scroll. 
    *
    *It can scroll through mouse or by pressing,
    *and
    * 
    *by moveTabWithBtn function
    */

const switchTabs = (e, tabContentObject)  => {
        activeChanger();
      e.target.classList.add(st.active__tab);
      setTabContent(tabContentObject);


    //   let topAndBottom = tabTopAndBottom.current;

    //   let {scrollHeight, clientHeight, parentElement} = topAndBottom;

    //  // console.log(scrollHeight)

    //  console.log(tabTopAndBottom)

    //   parentElement.style.height = clientHeight+"px";



    }


    
    useEffect(() => {
        let topAndBottom = tabTopAndBottom.current;

      let {scrollHeight, clientHeight, parentElement} = topAndBottom;

     // console.log(scrollHeight)

     console.log(tabTopAndBottom)

    //   parentElement.style.height = clientHeight+"px";

    parentElement.style.height = `${parseInt(clientHeight)+50}px`;

       
    }, [switchTabs])



    const InspirationScrollAble = (e) => {
        const event = e.target;

        let { scrollLeft, scrollWidth, clientWidth }  = event;

        scrollLeft > 0 ?  setLeftScrollBtn(true) : setLeftScrollBtn(false);
        (scrollWidth - clientWidth == scrollLeft) ? setRightScrollBtn(false) : setRightScrollBtn(true);

       // alert("Iam on")
    }


    const moveTabWithBtn = (leftOrRight) => {

        let buttonParent = tabButtons.current;
        
      

        if (leftOrRight === null) {
            buttonParent.scrollLeft += 50;
            return;
        } 

        buttonParent.scrollLeft -= 50;

       // console.log(tabContents);
    }

    //console.log(tabContents);


    return (
        <div className={st.inspiration__container}>
        <div className={st.all__wrapper} ref={tabTopAndBottom}>
            <h1 className={st.inspiration__heading}>{inspirationHeading}</h1>

            <div className={st.tab__head__container}>
            {
                leftscrollBtn ? <button onClick={() => moveTabWithBtn('-')}  className={`${st.btnIns} ${st.BtnInsLeft}`} >
                 <ArrowBackIosIcon className={st.pointer__none} />
                 </button> : ''
            }
           

                 <div className={st.tab__buttons} ref={tabButtons} onScroll={InspirationScrollAble}>
               


                 <button className={`${st.btn__for__footer_tab} ${st.active__tab}`} onClick={() => switchTabs(event, DestOfArtsAndCul)}>Destinations for arts & culture</button>
                 <button className={st.btn__for__footer_tab} onClick={() => switchTabs(event, DestForOutAdven)}>Destinations for outdoor adventure</button>

                 <button className={st.btn__for__footer_tab} onClick={() => switchTabs(event, OutCabin)}>Mountains cabin</button>

                 <button className={st.btn__for__footer_tab} onClick={() => switchTabs(event, BeachDest)}>Beach destinations</button>
                 <button className={st.btn__for__footer_tab} onClick={() => switchTabs(event, PopDest)}>Popular destinations</button>


                 </div>
                 <ITabContent key={"1"} content={tabContent}/>
                 {
                    rightscrollBtn ? <button  onClick={() => moveTabWithBtn(null)} className={`${st.btnIns} ${st.BtnInsRight}`}>
                     <ArrowForwardIosIcon className={st.pointer__none} />
                 </button> : ''
                 }
              
                {/* <Footer/> */}

            </div>
            </div>
        </div>
    )
}

export default InspirationForFuture;
