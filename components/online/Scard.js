import { useState } from 'react'
import StarIcon from '@material-ui/icons/Star';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import st from '../../styles/online/Scard.module.css'


const Scard = ({img ,rateAndHead, Head, priceAndFrom, imgList }) => {
//scaleAnimation

const [animation, setAnimation] = useState('');


     const [image, setImage] = useState(img);

     const [interval, setInterVal] = useState();



    



 //const imgList = ["cha1.webp", "cha2.webp", "cha3.webp", "cha4.webp"];

    const changeImage = () => {

        let counter = 1;

        setImage(imgList[0]);

        setAnimation(st.scaleAnimation);

       const inter = setInterval(() => {
            setImage(imgList[counter]);

            //setAnimation(st.scaleAnimation);
            counter++;

            //console.log(animation);

            if (imgList.length == counter) {
                //console.log(counter);
                counter = 0

               
            }

        }, 2000);


        setInterVal(inter);
        
    }


    const reSetImage = () => {
        setAnimation('');
       clearInterval(interval);
       setImage(img);
    }



    return (
        <a href="#" onMouseEnter={changeImage} onMouseLeave={reSetImage}>
            <div className={st.sCard}>
            <div className={st.imageInfo}>
             <img src={`/images/${image}`} 
              alt="sphoto" className={`${st.sImage} ${animation}`}/>

            </div>
            <FavoriteBorderIcon className={`${st.heartIconOnImg}`}/> 
           
            <div className={st.textInfo}>


            <p className={st.rateAndHead}>
            <StarIcon className={st.starRating}/>
            {rateAndHead}
            </p>

            <h3 className={st.head}>
            {Head}
            </h3>

            <h3 className={st.priceAndFrom}>
           <strong className={st.fromText}>{priceAndFrom.fromText}</strong>{priceAndFrom.person}
            </h3>

            <div className={st.timeContainer}>
            <button className={st.time}>
            3:30 pm
            </button>

            <button className={st.time}>
            11:30 am
            </button>
            </div>

            </div>

           
        </div>
        </a>
    )
}

export default Scard
