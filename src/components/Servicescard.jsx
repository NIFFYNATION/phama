import { Link, NavLink } from "react-router-dom";
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
            `grid grid-rows-2 justify-center gap-[10px] my-5 ` + styles.sec2Row
          }
        >
          <div className={` grid sm:grid-flow-col  gap-[10px] `}>
            <div className={`w-[280px] ` + styles.content}>
              <img src="/homeIcon1.png" alt="" />
              <h2>Angioplasty</h2>
              <p>
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </p>
              <Link
                to="/Angioplasty"
                className={
                  "text-2xl !text-[#C9C9C9] hover:!text-primary02 flex items-center w-[150px]"
                }
              >
                <div className={`flex items-center `}>
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </Link>
            </div>

            <div className={`w-[280px] mt-10 md:mt-0 ` + styles.content}>
              <img src="/homeIcon2.png" alt="" />
              <h2>Cardiology</h2>
              <p>
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </p>
              <Link
                to="/Cardiology"
                className={
                  "text-2xl !text-[#C9C9C9] hover:!text-primary02 flex items-center w-[150px]"
                }
              >
                <div className={`flex items-center `}>
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </Link>
            </div>
          </div>

          <div className={`grid sm:grid-flow-col mt-10 md:mt-0 `}>
            <div className={`pt-4 md:pt-0 w-[280px] ` + styles.content}>
              <img src="/homeIcon3.png" alt="" />
              <h2>Dental</h2>
              <p>
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </p>
              <Link
                to="/Dental"
                className={
                  "text-2xl !text-[#C9C9C9] hover:!text-primary02 flex items-center w-[150px]"
                }
              >
                <div className={`flex items-center `}>
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </Link>
            </div>
            <div className={`p-0 w-[280px] md:w[290px] ` + styles.content}>
              <img
                src="/Img1.png"
                alt=""
                className={`w-full h-64 object-cover object-center sm:object-cover `}
              />
            </div>
          </div>
        </div>

        <div
          className={
            `grid grid-rows-2 justify-center gap-[10px] ` + styles.sec2Row
          }
        >
          <div className={`grid sm:grid-flow-col mt-10 md:mt-0 `}>
            <div className={`pt-4 md:pt-0 w-[280px] ` + styles.content}>
              <img src="/homeIcon4.png" alt="" />
              <h2>Eye Care</h2>
              <p>
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </p>
              <Link
                to="/eyecare"
                className={
                  "text-2xl !text-[#C9C9C9] hover:!text-primary02 flex items-center w-[150px]"
                }
              >
                <div className={`flex items-center `}>
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </Link>
            </div>

            <div className={`!p-0  w-[280px] md:w[290px] ` + styles.content}>
              <img
                src="/Img2.png"
                alt=""
                className={`w-full h-64 object-cover object-center sm:object-cover`}
              />
            </div>
          </div>

          <div className={`grid sm:grid-flow-col gap-[10px] mt-10 md:mt-0 `}>
            <div className={`w-[280px] ` + styles.content}>
              <img src="/homeIcon5.png" alt="" />
              <h2>Orthopaedics</h2>
              <p>
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </p>
              <Link
                to="/Orthopaedics"
                className={
                  "text-2xl !text-[#C9C9C9] hover:!text-primary02 flex items-center w-[150px]"
                }
              >
                <div className={`flex items-center `}>
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </Link>
            </div>
            <div className={` w-[280.27px] mt-10 md:mt-0 ` + styles.content}>
              <img src="/homeIcon6.png" alt="" />
              <h2>Endocrinology</h2>
              <p>
                Our team of highl professionals uses the latest heal echnologies
                health quickly and easily.
              </p>
              <Link
                to="/Endocrinology"
                className={
                  "text-2xl !text-[#C9C9C9] hover:!text-primary02 flex items-center w-[150px]"
                }
              >
                <div className={`flex items-center `}>
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function ServiceItem({ icon, title, description, image }) {
  return (
    <div className={`bg-secondary03 p-6 rounded-lg  ${styles.content}`}>
      {image ? (
        <img
          src={image}
          alt=""
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
      ) : (
        <>
          <img src={icon} alt="" className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <Link
            to="/"
            className="text-lg text-gray-400 hover:text-primary02 flex items-center"
          >
            <span className="mr-2 text-black">Read More</span>
            <ion-icon name="add-circle"></ion-icon>
          </Link>
        </>
      )}
    </div>
  );
}

export default ServicesCard;