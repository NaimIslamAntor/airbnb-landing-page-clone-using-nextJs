import st from '../../styles/online/ShowAll.module.css'

// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const ShowAll = ({ boxLink="#", showAllLink="#", iconLink="#" }) => {
    return (
        <a className={st.showAllBox} href={boxLink}>
          <a href={showAllLink} className={st.showAllText}>Show all</a>
          <a href={iconLink} className={st.showAllIcon}><ArrowForwardIosIcon className={st.showAllAcIcon}/></a>
        </a>
    )
}

export default ShowAll
