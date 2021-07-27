import st from '../styles/Footer.module.css';

import {About, Community, Host, Support} from './FooterDetails';
import FooterCol from './FooterCol';
import FooterSocial from './FooterSocial';
const Footer = () => {

   
    return (
        <footer className={st.footer__container}>
          <div className={st.container__child}>
          <div className={st.footer__inner__container}>
           <FooterCol foColData={About} />
           <FooterCol foColData={Community} />
           <FooterCol foColData={Host} />
           <FooterCol foColData={Support} />
           </div>

          <FooterSocial/>
          </div>
        </footer>
    )
}

export default Footer;
