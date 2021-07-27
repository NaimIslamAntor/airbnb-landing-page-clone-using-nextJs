import {useState, useRef} from 'react';
import st from '../../styles/online/VisitCard.module.css'
import StarIcon from '@material-ui/icons/Star';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const VisitCard = ({videoSrc, videoType, img, rateAndHead, Head, priceAndFrom, soldOrNot }) => {
    
    const VideoRef = useRef('');

    const [showOrNot, setShowOrNot] = useState('');

    const [block, setBlock] = useState('');

    const [playPause, setPlayPause] = useState('nope');

    const [play, setPlay] = useState('play');


    const playTheVideo = () => {
       let getVideo = VideoRef.current;

       setPlayPause('yup');
       setShowOrNot(st.imgVideo);
       


      setBlock(st.makeBlock)

      if(play == 'play'){
        getVideo.play();
      }
      
    }


    
    const pauseTheVideo = (pauseCon=null) => {

        let getVideo = VideoRef.current;
 
        

        setPlayPause('nope');
       
  
        setShowOrNot('');

        setBlock(st.imgVideo)
        
        getVideo.pause();

        
     

      
     }

     
    const pauseOrPlayByBtn = () => {
        let getVideo = VideoRef.current;
   
        if (play === 'play') {

            getVideo.pause();
            setPlay('pause');
            return;
        } 

            getVideo.play();
            setPlay('play');
        
     

      
     }
 

    return (
        <div className={st.visitCard} onMouseEnter={playTheVideo} onMouseLeave={pauseTheVideo} onTouchStart={playTheVideo} onTouchEnd={pauseTheVideo}>
            <div className={st.imgAndVideo}>

            <video muted className={`${st.imgVideo} ${st.visitCardImg} ${block}`} ref={VideoRef}>
                <source src={videoSrc} type={videoType}/>
                </video>

            <img
                src={img}
                alt="visitCard"
                className={`${showOrNot} ${st.visitCardImg}`}
            />

           

            
              <FavoriteBorderIcon className={`${st.heartIconOnImg}`}/> 
           

            {
           
                soldOrNot != '' ? <div className={`${st.soldOrNot}`}>{soldOrNot}</div> : ''
            }

{
    playPause == 'yup' ? 
    play == 'play' ?  
    <PauseIcon className={`${st.playPauseBtn}`} onClick={() => pauseOrPlayByBtn()}/> :
      <PlayArrowIcon className={`${st.playPauseBtn}`} onClick={() => pauseOrPlayByBtn()}/> : ''
   
}
           

            </div>

            <div className={st.visitSmallDetails}>
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

            </div>

        </div>
    )
}

export default VisitCard
