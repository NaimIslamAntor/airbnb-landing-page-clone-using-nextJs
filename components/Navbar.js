
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import LanguageIcon from '@material-ui/icons/Language';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import UserLog from './UserLog';
import LocationChecker from './LocationChecker';



function Navbar() {

    const [userLog, makeUserLog] = useState("");
    const [showu, makeShowU] = useState(false);

    const [scrollingClass, makescrollingClass] = useState(false);
    const [afterclick, makeafterclick] = useState(false);


    const [searchClick, makeSearchClick] = useState('');

    const getRefOfSInput = useRef(null);

    const userFunc = () => {
        if(!showu){
            makeShowU(true);
            makeUserLog(
                <UserLog/> 
                );
              
        }else{
            makeShowU(false);
            makeUserLog("");
        }

    }

   
 
const handleScroll = () => {
    if (window.scrollY > 100) {
        makescrollingClass(true);
        makeafterclick(false);
    }else{
        makescrollingClass(false);
        makeafterclick(false);
    }

    // console.log(window.scrollY);
}


 useEffect(() => {
     window.addEventListener('scroll', handleScroll); 
  },[]);




  const makeTure = () => {
    makescrollingClass(false);
    makeafterclick(true);
  }

  const getStartedWithLocation = () => {
      if(searchClick == ''){
     
          makeSearchClick(styles.get_yourLoaction);
       getRefOfSInput.current.focus();
         console.log(getRefOfSInput)
      }else{
        makeSearchClick('');
      }
  }

    return (
        <header  className={`${styles.hearder} ${scrollingClass ? styles.scroll_style: ''} ${afterclick ? styles.alternative_scroll_styles: ''}`}>
          <div className={styles.header_wrapper}>
        <div className={styles.header_topbar}>
              {/* logo */}
          <div className={styles.getz_index}>
      

<Image src='/images/airbnb-64.png'
                alt="airbnb-logo"
                width={30}
                height={30}
                />

             
{/* <Image src='/images/airbnb-desktop.svg'
                alt="airbnb-logo"
                width={30}
                height={30}
                />
    */}

    {/* <img src='/images/airbnb-desktop.svg'
                alt="airbnb-logo"
        
      
                />
    */}

           </div>

{/* right side */}
           <div className={`${styles.top_sec} ${scrollingClass ? styles.get_color: ''}`}>
               <a className={`${styles.get_hover} ${afterclick ? styles.get_color: ''}`}>Become a host</a>
               <LanguageIcon className={styles.word_icon}/>

               <div className={styles.av_uu}>
               <div className={styles.avatar_bar} onClick={userFunc}>
                   <MenuIcon className={styles.menu_iconfor_me}/>
                   <AccountCircleIcon className={styles.avatar_forme}/>
                   
               </div>
               {userLog}
               </div>

           </div>
        </div>

          </div>
          <div className={`${styles.bottom_bar} ${scrollingClass ? styles.make_width: ''} 
          ${scrollingClass ? styles.get_rid_of_padding_margin: ''} ${afterclick ? styles.re_size_top: ''}

         `} onClick={scrollingClass ? makeTure: () => {}}
         >

<div className={`${styles.nav_list} ${scrollingClass ? styles.display_none: ''}`}>
    <a className={` ${afterclick ? styles.get_color: ''} ${styles.get_font_size} ${styles.active}`}>Places to stay</a>
    <a className={` ${afterclick ? styles.get_color: ''} ${styles.get_some_margin} ${styles.get_font_size}`}>Experiences</a>
    <a className={` ${afterclick ? styles.get_color: ''} ${styles.get_font_size} ${styles.get_font_size} ${styles.right_margin}`}>Online Experiences</a>
</div>

<div className={`${styles.button_div} ${scrollingClass ? styles.make_height: ''}


 ${afterclick ? styles.get_event_color: ''} ${!searchClick == '' ? styles.get_event_color2: ''}`}>



<div className={`${styles.get_basis} ${styles.nest__of_theinput} ${scrollingClass ? styles.display_none: ''} ${styles.get_after} ${searchClick}`}>
    <p className={styles.hangbar_direction}>Location</p>



   <h6 onClick={getStartedWithLocation} className={`${styles.sub_hangbar_direction} ${searchClick == '' ? '' : styles.z_index}`}>Where are you <span className={styles.desktop_show}>going</span>
        <span className={styles.mobile_show}>...</span></h6> 


 <div className={`${styles.search__input} ${searchClick == '' ? styles.z_index : ''}`}><input 

 ref={getRefOfSInput} className={styles.make__search}
          type="text" placeholder="Where are you going..."/></div>
 


</div>

<div  className={`${styles.get_basis} ${scrollingClass ? styles.display_none: ''} ${styles.get_after}`}>
<p className={styles.hangbar_direction}>Check in</p>
<h6 className={styles.sub_hangbar_direction}>Add dates</h6>
</div>

<div className={`${styles.get_basis} ${scrollingClass ? styles.display_none: ''} ${styles.get_after}`}>
<p className={styles.hangbar_direction}>Check out</p>
<h6 className={styles.sub_hangbar_direction}>Add dates</h6>
</div>
<div className={`${styles.get_basis} ${scrollingClass ? styles.display_none: ''}`}>
<p className={styles.hangbar_direction}>Guests</p>
<h6 className={styles.sub_hangbar_direction}>Add guests</h6>
</div>

{scrollingClass ? <span className={styles.start_search}>Strat your Search</span>: ''}

<button className={`${styles.fancy_btn} ${scrollingClass ? styles.restyle__searchbtn: ''}
 ${afterclick ? styles.btn_afterevent: ''} ${searchClick == '' ? '' : styles.btn_afterevent}`}  onClick={getStartedWithLocation}>
    <SearchIcon/>

    {
        scrollingClass != true ?
         afterclick ? <span className={styles.search_writin}>Search</span>: searchClick == '' ? '' : 
         <span className={styles.search_writin}>Search</span> : ''
    }
    
</button>
</div>

</div> 

{
    searchClick != '' ? scrollingClass ? '': <LocationChecker movingClass={`${'move__for_header'} ${afterclick ? 'new_g_post_location': ''}`}/> : ''
}



        </header>
    )
}



export default Navbar;