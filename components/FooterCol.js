import st from '../styles/FooterCol.module.css';



const FooterCol = ({foColData}) => {

    const {headline, details} = foColData;

    return (
        <div className={st.footer__col}>
           <p className={st.footer__col__heading}>{headline}</p>
           <div className={st.footer__link__parent}>
          {
           details.map(detail => <a href="#" className={st.footer__link}>{detail}</a>)

           } 
        
           </div>
        </div>
    )
}

export default FooterCol
