
import { useState, useEffect } from 'react';
import st from '../../styles/online/Header.module.css';
import Image from 'next/image';
import LanguageIcon from '@material-ui/icons/Language';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import TuneIcon from '@material-ui/icons/Tune';

import UserLog from '../UserLog';

import FilterList from './FilterList';


const Header = ({ btns }) => {

    let noneObject = {'display': 'none'};

    const [none, setNone] = useState(noneObject);


    const  [sModule, setSModule] = useState('');

    const [classOfHeader, setClassOfHeader] = useState('')

    const [classOfSecNav, setClassOfSecNav] = useState('')



    const popUpS = () => {

        if (sModule === '') {
            setSModule(<UserLog/>);
        } else {
            setSModule('');
        }
      

    }

    const getHeader = () => {

        let letsMatchMeda = window.matchMedia("(max-width: 743px)")

        if(letsMatchMeda.matches){

            if (window.scrollY > 50) {
                setClassOfHeader(st.makeHeaderStyle);
                setClassOfSecNav(st.secNavStyle);
    
                setNone({'top': '-46%'});
                return;
            }
    
            setClassOfHeader('');
            setClassOfSecNav('');
            setNone(noneObject);
        }

       
    }

    useEffect(() => {
       window.addEventListener('scroll', getHeader)
    }, []);



    return (
        <header className={`${st.header} ${classOfHeader}`}>

{/* big screen nav */}
            <nav className={st.nav}>

            <div className={st.logo}>

            <Image src='/images/airbnb-64.png'
                alt="airbnb-logo"
                width={30}
                height={30}
                />

            </div>


            <div className={st.nav__items}>
                <a href="#">
                Become a host
                </a>

                <a href="#" className={st.glob__icon}>
              <LanguageIcon className={st.gicon}/>
                </a>

                <a onClick={popUpS} className={st.man__bar}>
             <div className={st.man__and__bar}>
             <MenuIcon/>
             <AccountCircleIcon/>
             </div>
             {sModule}</a>
            </div>
            </nav>

            
       {/* small screen nav */}

       <nav className={`${st.small__nav} ${classOfSecNav}`}>

       <div className={`${st.s_nav_first}`}>
       <ArrowBackIosIcon className={`${st.small__nav__icons} ${st.sm__left}`}/>
       <a className={st.ad__date}>Add Date</a>
       </div>

       <div className={`${st.s_nav_second}`}>
       <TuneIcon className={`${st.small__nav__icons} ${st.sm__menutype}`}/>
       </div>

       
       </nav>

       <FilterList 
       status={none}
       btns={btns} 
       btnsStatus={noneObject}
       />

        </header>
    )
}

export default Header;