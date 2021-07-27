
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import st from '../styles/BottomBar.module.css';

const BottomBar = () => {
    return (
        <div className={st.bottomBar}>
           

           <div className={st.btnsContainer}>
           <button className={`${st.btnBottombar} ${st.search}`}><SearchIcon className={`${st.searchFancy} ${st.btnIcons}`}/>
           <br/>
           <span className={`${st.btnCap} ${st.searchCap}`}>Search</span>
           </button>

           <button className={`${st.btnBottombar} ${st.wishList}`}><FavoriteBorderIcon className={`${st.btnIcons} ${st.wishFancy} `}/>
           <br/>
           <span className={st.btnCap}>wishLists</span>
           </button>

           <button className={`${st.btnBottombar} ${st.login}`}><AccountCircleIcon className={`${st.btnIcons} ${st.loginFancy} `}/>
           <br/>
           <span className={st.btnCap}>Login</span>
           </button>
           </div>
          
        </div>
        
    )
}

export default BottomBar;
