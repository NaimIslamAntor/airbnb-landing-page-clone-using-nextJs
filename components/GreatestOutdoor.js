import st from '../styles/GreatestOutdoor.module.css';

import React from 'react'

const GreatestOutdoor = ({ image, greatestOutDoorHeadingpartone, greatestOutDoorHeadingparttwo, 
  greatestOutDoorSubHeading, greatestOutDoorBtnText, outdoorStyleObject, btnStyleObject }) => {
  const {img1, img2} = image;

  console.log(greatestOutDoorSubHeading);

    return (
      <div className={st.greatest_outdoorparent}>
            <div className={st.greatest__outdoor}>
            {/* <img
            className={`${st.greatest__outdoorimage} ${st.big__screen}`}

                src={`/images/${img1}`}
                alt="greatest loaction"
            />

            <img
            className={`${st.greatest__outdoorimage} ${st.small__screen}`}

                src={`/images/${img2}`}
                alt="greatest loaction"
            /> */}

            <picture>

            <source media="(max-width: 743px)" srcSet={`/images/${img2}`}/>
            <img className={`${st.greatest__outdoorimage}`}  src={`/images/${img1}`} alt="greatest loaction"/>

            </picture>




           <div className={st.greatest__outdoor__content}>
           <h1 className={`${st.GreatestOutdoor__heading} ${st.big__screen}`} style={outdoorStyleObject}>{greatestOutDoorHeadingpartone}
      <br/>{greatestOutDoorHeadingparttwo}</h1>

      <h1 className={`${st.GreatestOutdoor__heading} ${st.small__screen}`}>{greatestOutDoorHeadingpartone} {greatestOutDoorHeadingparttwo}</h1>
            <p className={st.greatest__outdoorsubheading} style={outdoorStyleObject}>{greatestOutDoorSubHeading}</p>

            <a className={st.btn_inspired} href="#" style={btnStyleObject}>
                {greatestOutDoorBtnText}
            </a>
           </div>



        </div>
      </div>
    )
}

export default GreatestOutdoor;
