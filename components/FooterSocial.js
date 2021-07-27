import st from '../styles/FooterSocial.module.css';

import LanguageIcon from '@material-ui/icons/Language';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const FooterSocial = () => {

    /*
    Choose a language
English (US)
Choose a currency USD
$
    */
    return (
        <div className={st.social__container}>
           <div className={st.social__text}>
           <p className={st.soc__textinfo}>
           © 2021 Airbnb, Inc.<a href="#" className={st.social__foolink}>·Privacy</a>
           <a href="#" className={st.social__foolink}>·Terms</a>
           <a href="#" className={st.social__foolink}>·Sitemap</a>
           
           
        
           </p>
           </div>

           <div className={st.social__icons}>

           <div className={st.footer__linkIcons}>

           
<a href="#" className={`${st.link__So} ${st.link__over_so}`}><LanguageIcon className={st.social__footer__icons}/>
<span style={{'marginLeft':'5px'}}>English(US)</span></a>

           <a href="#" className={`${st.link__So} ${st.link__over_so}`}><AttachMoneyIcon className={st.social__footer__icons}/> USD</a>

           </div>

           <div className={st.footer__Icons}>

           <a href="#" className={`${st.link__So} ${st.social__only}`}><FacebookIcon className={st.social__footer__icons}/></a>
           <a href="#" className={`${st.link__So} ${st.social__only}`}><TwitterIcon className={st.social__footer__icons}/></a>
           <a href="#" className={`${st.link__So} ${st.social__only}`}><InstagramIcon className={st.social__footer__icons}/></a>

           </div>

           </div>
        </div>
    )
}

export default FooterSocial;
