import NearbyBlock from './NearbyBlock';
import styles from '../styles/NearBy.module.css';


function NearBy({ nearbyHeading, datas }) {
 
    return (
        <div className={styles.nearby}>
          <h1 className={styles.nearby__heading}>{nearbyHeading}</h1>
         <div className={styles.nearby__block}>
         {
            datas.map((data) => {
                return  <NearbyBlock 
                key={data.id}
                imageSrc={`/images/${data.image}`}
                nearByName={data.nearbyName}
                nearByDirivingTime={data.nearByTime}
                />
            })
         }
         
         </div>
        </div>
    )
}


export default NearBy
