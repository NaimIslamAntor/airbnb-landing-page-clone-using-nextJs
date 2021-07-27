import st from '../styles/LocationChecker.module.css';
import Image from 'next/image';

const LocationChecker = ({ movingClass }) => {
    return (
        <div className={`${st.location__container} ${movingClass}`}>
        <Image
        src="/images/location.webp"
        alt="Location"
        width={48}
        height={48}
        className={st.location__image}
        />
        <h3 className={st.loction__text}>Explore nearby destinations</h3>
        </div>
    )
}

export default LocationChecker;
