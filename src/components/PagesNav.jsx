import styles from "./PagesNav.module.css";
import Logo from "../components/Logo";
import { NavLink } from "react-router-dom";
import FirstNav from "../components/FirstNav";
import Button from "../components/Button";
import { useState } from "react";

function PagesNav() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <FirstNav />
      <div className="contain ml-auto mr-auto">
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right right-8 bottom-25 pt-6  md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <nav className=" w-full md:w-auto h-28 flex justify-between items-start md:items-center flex-col md:flex-row ">
          <Logo />

          <ul
            className={`${open ? "" : "hidden md:flex"} transition-all duration-500 ease-in pl-2 md:pl-9 pb-12 md:pb-0 gap-5 flex min-h-min flex-col md:flex-row items-start md:items-center`}
          >
            <li>
              <NavLink to="/" className={styles.anchor}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={styles.anchor}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className={styles.anchor}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/Services" className={styles.anchor}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/Pages" className={styles.anchor}>
                Pages
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className={styles.anchor}>
                Contact
              </NavLink>
            </li>
          </ul>
          <NavLink
            to="/Appointment"
            className={`${open ? "" : "hidden md:flex"} ` + styles.anchor}
          >
            <Button>Appointment</Button>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default PagesNav;
