import styles from './Logo.module.css'
import { NavLink } from "react-router-dom";



function Logo() {
    return (
        <div className={styles.logo}>
            <NavLink href="/" className={styles.anchor}> <img src="/Logo.png" alt="" /> </NavLink>
        </div>
    )
}

export default Logo
