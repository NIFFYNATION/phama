import styles from "./PagesNav.module.css";
import Logo from "../components/Logo";
import { Link, NavLink } from "react-router-dom";
import FirstNav from "../components/FirstNav";
import { useState, useEffect, useRef} from "react";
import AppointmentModal from "./AppointmentModal";

function PagesNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = () => {
    setOpen(!open);
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="relative z-[9999]">
        <FirstNav />
        <div className="contain ml-auto mr-auto">
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-[15px] md:right-[75px] top-23 sm:top-16 pt-7 lg:hidden z-50"
          >
            <ion-icon className="" name={open ? "close" : "menu"}></ion-icon>
          </div>
          <nav className="w-full mt-1 md:mt-0 md:w-auto h-24 md:h-28 flex justify-between items-start md:items-center flex-col md:flex-row">
            <Logo />

            <ul
              ref={menuRef}
              className={`${
                open ? "left-0" : "-left-full"
              } lg:static fixed top-0 lg:h-auto h-screen bg-white z-[99999] w-[300px] lg:w-auto transition-all duration-300 ease-in lg:flex items-center gap-5 p-8 lg:p-0`}
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary01 border-b-2 border-primary01 z-[99999]"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="mt-8 md:mt-0">
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    isActive ? "text-primary01 border-b-2 border-primary01" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="mt-8 md:mt-0">
                <NavLink
                  to="/Services"
                  className={({ isActive }) =>
                    isActive ? "text-primary01 border-b-2 border-primary01" : ""
                  }
                >
                  Services
                </NavLink>
              </li>
              <li className="mt-8 md:mt-0">
                <NavLink
                  to="/Pages"
                  className={({ isActive }) =>
                    isActive ? "text-primary01 border-b-2 border-primary01" : ""
                  }
                >
                  Pages
                </NavLink>
              </li>
              <li className="mt-8 md:mt-0">
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    isActive ? "text-primary01 border-b-2 border-primary01" : ""
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <NavLink
                to="/Appointment"
                className={`${isMobile ? "" : "hidden lg:flex"} z-[99999] ml-[0] lg:ml-[10rem] ${styles.anchor}`}
              >
                <Link
                  className="bg-[#00E5A1] absolute md:relative py-3 px-6 mt-8 md:mt-0 sm:py-4 sm:px-8 !text-[#1C1C1C] hover:bg-secondary03 text-sm sm:text-base font-semibold w-[60%] sm:w-auto"
                  onClick={openModal}
                >
                  Appointment
                </Link>
              </NavLink>
            </ul>
          </nav>
        </div>
      </header>
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default PagesNav;
