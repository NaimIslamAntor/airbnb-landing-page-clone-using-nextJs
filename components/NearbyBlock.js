import styles from '../styles/NearbyBlock.module.css';

function NearbyBlock({ imageSrc, nearByName, nearByDirivingTime }) {
    return (
        <div className={styles.bearbyblock}>
            <img src={imageSrc} alt="nearby" className={styles.img__nearby} />

            <div className={styles.nearby__title_block}>

            <h4 className={styles.nearby_name}>
          {nearByName}
            </h4>

            <h4 className={styles.nearby_driving_time}>
                {nearByDirivingTime}
            </h4>
            </div>
        </div>
    )
}

export default NearbyBlock
