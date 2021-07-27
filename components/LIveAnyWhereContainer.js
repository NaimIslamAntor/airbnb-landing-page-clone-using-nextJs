import {useRef, useState} from 'react';
import st from '../styles/LiveAnyWhereContainer.module.css';
import LiveAnyWhere from '../components/LiveAnyWhere';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


const LIveAnyWhereContainer = ({datas}) => {


const getSlideContainer = useRef(null);

const [btnShow, setBtnShow] = useState("-");


  const moveLeft = () => {
  
    let {clientWidth} = getSlideContainer.current;
    clientWidth = clientWidth / 4;

    setBtnShow("-");
    getSlideContainer.current.scrollLeft = -clientWidth;


}

  
  const moveRight = () => {

    let {clientWidth} = getSlideContainer.current;

    clientWidth = clientWidth / 4;

   
    setBtnShow("+");
    getSlideContainer.current.scrollLeft = clientWidth;


 }





    return (
        <div className={st.liveanywhere__container}>
       <h1>Live anywhere</h1>

{
  btnShow == "-" ? '' :  <ChevronLeftIcon className={`${st.leftright__overall} ${st.anywhere__lefticon}`} onClick={moveLeft}/>
}
   
         <div ref={getSlideContainer} className={st.liveanywhere__inner_container}>
         {
          datas.map(data =>   <LiveAnyWhere  key={data.id} src={data.src} caption={data.caption} />)
         }
       
         </div>
{
  btnShow == "+" ? '' :  <ChevronRightIcon className={`${st.leftright__overall} ${st.anywhere__righticon}`} onClick={moveRight}/>
}
       </div>
    )
}

export default LIveAnyWhereContainer;
