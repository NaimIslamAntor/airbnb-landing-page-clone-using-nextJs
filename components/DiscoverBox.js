import st from '../styles/DiscoverBox.module.css';
import Image from 'next/image';


const DiscoverBox = ({ img, heading, subheading}) => {
    return (
        <div className={st.discover__box}>
            <img
                src={`/images/${img}`}
                alt="discover__content"
                className={st.discover__content_pic}
            />
            
            {/* <Image
                 src={`/images/${img}`}
                alt="discover__content"
                layout="fill"
            /> */}

            <h3 className={st.discover__heading}>{heading}</h3>
            <p className={st.discover__subheading}>{subheading}</p>
        </div>
    )
}

export default DiscoverBox
