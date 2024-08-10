import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import style from "./Footer.module.css";
import Button from "./Button";

function Footer() {
  return (
    <>
      <div className="contain-fluid bg-[url(/FooterBackground.png)] pb-20 bg-[#E5F2EF] mt-[160px] bg-center bg-no-repeat h-auto">
        <div className="contain">
          <div className="grid lg:grid-cols-4 gap-4 mb-8 pt-20">
            <div className="">
              <Logo />
            </div>
            <div className="flex items-center gap-2 ml-0 lg:ml-auto">
              <div className="bg-[#0FE3AF] text-primary01 flex items-center justify-center h-[40px] w-[40px] text-center rounded-full">
                <i class="fa-solid fa-phone"></i>
              </div>
              <p className="text-[#545454] font-medium">
                (+22) 123 - 4567 - 900
              </p>
            </div>

            <div className="flex items-center gap-2 mt-4 md:mt-0 ml-0 lg:ml-auto ">
              <div className="bg-[#0FE3AF] text-primary01 flex items-center justify-center h-[40px] w-[40px] text-center rounded-full">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <p className="text-[#545454] font-medium">
                support@doctorate.com
              </p>
            </div>
            <div className="flex justify-start  ml-1 lg:ml-auto  gap-8 mt-4 text-[20px] text-primary01">
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>

          <div
            className={
              `grid sm:grid-cols-2 md:grid-cols-4 gap-8 ` + style.footer
            }
          >
            <div>
              <h4 className="!font-bold">
                “A Simple Story About The Doctorate Medical Center & Health Care
                Foundation
              </h4>
            </div>
            <div>
              <h4>Explore</h4>
              <ul className={` `}>
                <li>
                  <NavLink to="/" className={``}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className={``}>
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className={``}>
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className={``}>
                    Testimonials
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className={``}>
                    News
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h4>Uitility Pages</h4>
              <ul className={` `}>
                <li>
                  <NavLink to="/" className={``}>
                    Style Guide
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className={``}>
                    Changelog
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className={``}>
                    Licenses
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className={``}>
                    Protected Page
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className={``}>
                    404 Page
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="">Book an appointment</h4>
              <p className="text-[#545454] mt-2 font-medium">
                It is a long established fact that a reader will be distracted
              </p>
              <input
                className="bg-white p-4 mt-6 w-full       "
                placeholder="your email address"
                type="email"
                name=""
                id=""
              />
              <Button btnClass=" bg-primary01 hover:bg-secondary03 border border-primary01 mt-4 ">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="contain-fluid py-4 text-center text-[#545454] text-[14px] font-medium">
        <span>Copyright © Pharma | Designed by VictorFlow Templates</span>
      </div>
    </>
  );
}

export default Footer;
