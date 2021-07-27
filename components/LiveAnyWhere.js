
import st from '../styles/LiveAnyWhere.module.css';

const LiveAnyWhere = ({ src, caption }) => {

    return (
        <div className={st.liveanywhere__container}>
            <img
                src={`/images/${src}`}
                alt="live_any_where"
              
                className={st.liveanywhere__image}
            />
            <h3 className={st.liveanywhere__caption}>{caption}</h3>
        </div>
    )
}

export default LiveAnyWhere
