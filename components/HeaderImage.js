import styles from '../styles/HeaderImage.module.css';
import Image from 'next/image';


function HeaderImage({ image, imageBottomLine}) {
    return (
        <div className={`${styles.image_container}`}>
        
            <div>
            <img src={image} alt="heading_bg" className={`${styles.header_Image}`}/>
            </div>
            <div className={`${styles.bottom_line_div}`}>
            <h1 className={styles.bottom_line}>{imageBottomLine}</h1>
            </div>
        </div>
    )
}

export default HeaderImage;
