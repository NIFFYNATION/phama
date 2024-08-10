import styles from "./Logo.module.css";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className={`pt-3 md:pt-0 pb-6 md:pb-0 + ` + styles.logo}>
      <NavLink to="/" className={styles.anchor}>
        {" "}
        <img src="/Logo.png" alt="" />{" "}
      </NavLink>
    </div>
  );
}

export default Logo;
