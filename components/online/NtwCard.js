import React from 'react'
import st from '../../styles/online/NtwCard.module.css';



const NtwCard = ({ img, explainHead }) => {
    return (
        <div className={st.NtwCard}>
            <img
                src={img}
                alt="ntw-card"
                className={st.ntwCardImg}
            />

            <div className={st.ntwCardTextInfo}>
            <p className={st.ntwText}>
            <span className={st.smHead}>Collection</span>

            {/* <div className={st.bgHead}>Connect with olympians & parolympians</div> */}
            {/* <div className={st.bgHead}>Explore Japanese culture</div> */}
              
            <div className={st.bgHead}>{explainHead}</div>

            </p>
            </div>

            <div className={st.ntwCardBtnInfo}>
            <a className={st.ntwShowMoreBtn}>Show All</a>
            </div>
        </div>
    )
}

export default NtwCard
