import { useRef } from 'react'
import Scard from './Scard';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


import st from '../../styles/online/ScardContainer.module.css';


const ScardContainer = ({ heading, datas }) => {


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
        
                  <div className={st.visitSliderInnerContainer} ref={visitSlideGetRef} 
                  
                  // style={{"gridTemplateColumns": `repeat(${datas.length}, 32.33%)`}}
                  
                  >
        

        {
          datas.map((data, index) => {
            return     <Scard
                      key={index}
                     img={data.img}
                     rateAndHead={data.rateAndHead}
                     Head={data.Head}
                     priceAndFrom={data.priceAndFrom}
                     imgList={data.imgList}
                 />
          })
        }

             

{/*                  
<Scard
                     rateAndHead="4.95 (188) China"
                     Head="Fun Giant Panda Time With a Nature Guide"
                     priceAndFrom={{fromText: 'From $25', person: '/ person'}}
                     imgList={["cha1.webp", "cha2.webp", "cha3.webp", "cha4.webp"]}
                 />

                 
<Scard
                     rateAndHead="4.95 (188) China"
                     Head="Fun Giant Panda Time With a Nature Guide"
                     priceAndFrom={{fromText: 'From $25', person: '/ person'}}
                     imgList={["cha1.webp", "cha2.webp", "cha3.webp", "cha4.webp"]}
                 />

                 
<Scard
                     rateAndHead="4.95 (188) China"
                     Head="Fun Giant Panda Time With a Nature Guide"
                     priceAndFrom={{fromText: 'From $25', person: '/ person'}}
                     imgList={["cha1.webp", "cha2.webp", "cha3.webp", "cha4.webp"]}
                 />

                 
<Scard
                     rateAndHead="4.95 (188) China"
                     Head="Fun Giant Panda Time With a Nature Guide"
                     priceAndFrom={{fromText: 'From $25', person: '/ person'}}
                     imgList={["cha1.webp", "cha2.webp", "cha3.webp", "cha4.webp"]}
                 />

                 
<Scard
                     rateAndHead="4.95 (188) China"
                     Head="Fun Giant Panda Time With a Nature Guide"
                     priceAndFrom={{fromText: 'From $25', person: '/ person'}}
                     imgList={["cha1.webp", "cha2.webp", "cha3.webp", "cha4.webp"]}
                 />

                 
<Scard
                     rateAndHead="4.95 (188) China"
                     Head="Fun Giant Panda Time With a Nature Guide"
                     priceAndFrom={{fromText: 'From $25', person: '/ person'}}
                     imgList={["cha1.webp", "cha2.webp", "cha3.webp", "cha4.webp"]}
                 />

                 
<Scard
                     rateAndHead="4.95 (188) China"
                     Head="Fun Giant Panda Time With a Nature Guide"
                     priceAndFrom={{fromText: 'From $25', person: '/ person'}}
                     imgList={["cha1.webp", "cha2.webp", "cha3.webp", "cha4.webp"]}
                 />

                 
<Scard
                     rateAndHead="4.95 (188) China"
                     Head="Fun Giant Panda Time With a Nature Guide"
                     priceAndFrom={{fromText: 'From $25', person: '/ person'}}
                     imgList={["cha1.webp", "cha2.webp", "cha3.webp", "cha4.webp"]}
                 />
        
       */}
        
                  </div>
        
                  </div>
        
                </div>
    )
}

export default ScardContainer
