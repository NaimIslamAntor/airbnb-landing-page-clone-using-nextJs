import styles from '../styles/UserLog.module.css';

function UserLog() {
    return (
        <div className={`${styles.userdp_container}`} >
           <a href="#" className={`${styles.dp_u_itemp}`}><strong>Sign up</strong></a>
           <a href="#" className={`${styles.dp_u_itemp}`}>Log in</a>
           <span className={styles.sep}></span>
           <a href="#" className={`${styles.dp_u_itemp}`}>Host your home</a>
           <a href="#" className={`${styles.dp_u_itemp}`}>Host an experience</a>
           <a href="#" className={`${styles.dp_u_itemp}`}>Help</a>
        </div>
    )
}

export default UserLog;
