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
          className="text-3xl absolute right right-8 bottom-30 pt-6  md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <nav className=" w-full mt-1 md:mt-0 md:w-auto h-24 md:h-28 flex justify-between items-start md:items-center flex-col md:flex-row ">
          <Logo />

          <ul
            className={`${open ? "" : "hidden md:flex"} bg-white z-[99999] md:bg-white bg-red w-full md:w-auto transition-all duration-500 ease-in pl-2 md:pl-5 pb-12 md:pb-0 gap-5 flex min-h-min flex-col md:flex-row items-start md:items-center `}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return !isActive
                    ? ""
                    : "text-primary01 border-b-2 border-primary01  z-[99999]";
                }}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/About"
                className={({ isActive }) => {
                  return !isActive
                    ? ""
                    : "text-primary01 border-b-2 border-primary01";
                }}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Services"
                className={({ isActive }) => {
                  return !isActive
                    ? ""
                    : "text-primary01 border-b-2 border-primary01";
                }}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Pages"
                className={({ isActive }) => {
                  return !isActive
                    ? ""
                    : "text-primary01 border-b-2 border-primary01";
                }}
              >
                Pages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className={({ isActive }) => {
                  return !isActive
                    ? ""
                    : "text-primary01 border-b-2 border-primary01";
                }}
              >
                Contact Us
              </NavLink>
            </li>
            <NavLink
              to="/Appointment"
              className={
                ` ${open ? "" : "hidden md:flex"} z-[99999] ml-0 md:ml-[3rem] ` +
                styles.anchor
              }
            >
              <Button btnClass="bg-primary02">Appointment</Button>
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default PagesNav;
