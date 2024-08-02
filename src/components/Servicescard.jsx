import { NavLink } from "react-router-dom";
import styles from "./Servicescard.module.css";
import TextBoderLine from "./Textborderline";

function ServicesCard() {
  return (
    <section className="servicesCard section2">
      <div className="contain">
        <div className={`text-center ` + styles.headingContent}>
          <TextBoderLine>SERVICES</TextBoderLine>
          <h3>Feel Like Home With Best Medical Care</h3>
        </div>

        <div
          className={
            `grid grid-rows-2 justify-center gap-[20px] my-5 ` + styles.sec2Row
          }
        >
          <div className={` grid  sm:grid-flow-col  gap-[20px] `}>
            <div className={` ` + styles.content}>
              <img src="/homeIcon1.png" alt="" />
              <h2>Angioplasty</h2>
              <p>
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </p>

              <NavLink
                to="/"
                className={
                  "text-2xl !text-[#C9C9C9] hover:!text-primary02 flex items-center w-[150px]"
                }
              >
                <div className={`flex items-center `}>
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </NavLink>
            </div>
            <div className={` ` + styles.content}>
              <img src="/homeIcon2.png" alt="" />
              <h2>Cardiology</h2>
              <p>
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </p>
              <NavLink
                to="/"
                className={
                  "text-2xl !text-[#C9C9C9] hover:!text-primary02 flex items-center w-[150px]"
                }
              >
                <div className={`flex items-center `}>
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </NavLink>
            </div>
          </div>
          <div className={` grid sm:grid-flow-col `}>
            <div className={`pt-4 md:pt-0 ` + styles.content}>
              <img src="/homeIcon3.png" alt="" />
              <h2>Dental</h2>
              <p>
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </p>
              <NavLink
                to="/"
                className={
                  "text-2xl !text-[#C9C9C9] hover:!text-primary02 flex items-center w-[150px]"
                }
              >
                <div className={`flex items-center `}>
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </NavLink>
            </div>
            <div className={`p-0  ` + styles.content}>
              <img src="/Img1.png" alt="" className={` `} />
            </div>
          </div>
        </div>

        <div
          className={
            `grid grid-rows-2 justify-center gap-[20px] ` + styles.sec2Row
          }
        >
          <div className={`grid sm:grid-flow-col `}>
            <div className={`pt-4 md:pt-0 ` + styles.content}>
              <img src="/homeIcon4.png" alt="" />
              <h2>Eye Care</h2>
              <p>
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </p>
              <NavLink
                to="/"
                className={
                  "text-2xl !text-[#C9C9C9] hover:!text-primary02 flex items-center w-[150px]"
                }
              >
                <div className={`flex items-center `}>
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </NavLink>
            </div>
            <div className={`!p-0 ` + styles.content}>
              <img src="/Img2.png" alt="" className={`image `} />
            </div>
          </div>

          <div className={`grid sm:grid-flow-col gap-[20px] `}>
            <div className={` ` + styles.content}>
              <img src="/homeIcon5.png" alt="" />
              <h2>Orthopaedics</h2>
              <p>
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </p>
              <NavLink
                to="/"
                className={
                  "text-2xl !text-[#C9C9C9] hover:!text-primary02 flex items-center w-[150px]"
                }
              >
                <div className={`flex items-center `}>
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </NavLink>
            </div>
            <div className={`` + styles.content}>
              <img src="/homeIcon6.png" alt="" />
              <h2>Angioplasty</h2>
              <p>
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </p>
              <NavLink
                to="/"
                className={
                  "text-2xl !text-[#C9C9C9] hover:!text-primary02 flex items-center w-[150px]"
                }
              >
                <div className={`flex items-center `}>
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCard;
