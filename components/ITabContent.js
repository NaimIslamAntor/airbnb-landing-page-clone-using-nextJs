import {useRef} from 'react';
import st from '../styles/ITabContent.module.css';

const ITabContent = ({ content }) => {

    //const tabContents = useRef("");

    //console.log(tabContents);

    return (
        <div className={st.tab__container} >

            {
                content.map(obj => {
                    return(
            <a className={st.tab__content__link} href="#">
           <div className={st.tab__content}>
            <p className={st.main__spot}>
               {obj.mainSpot}
            <br/>
            <span className={st.sub__spot}>{obj.subSpot}</span></p>
            </div>
           </a>
                    )
                })
            }
          

           
        </div>
    );
}

export default ITabContent;
