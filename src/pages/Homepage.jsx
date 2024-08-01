import Button from "../components/Button";
import PagesNav from "../components/PagesNav";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <>
      <section>
        <PagesNav />
      </section>

      <section>
        <div className="contain-fluid bg-[url(/BannerImg1.png)]  bg-cover bg-no-repeat h-auto ">
          <div className="contain grid md:grid-cols-2">
            <div className="min-w-full min-h-[400px]  flex items-center">
              <div className={`pt-32 pb-32 ` + styles.heroP}>
                <p className="text-base bg-primary02 w-4/5 md:w-2/5 text-center mb-4 mt-7">
                  MEDICAL PROFESSIONALS
                </p>
                <h1 className="text-[35px] md:text-[50px]  font-bold text-primary03">
                  Makes Your Health Better Will Makes Us Better
                </h1>
                <p className={`font-semibold mt-4 `}>
                  Our team of highly trained professionals uses the latest
                  healing technologies to restore you to pain-free health
                  quickly and easily.
                </p>

                <Button btnClass=" bg-primary01 hover:bg-secondary03 border border-primary01 mt-4 ">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="contain">
          <div className={`text-center ` + styles.headingContent}>
            <p>SERVICES</p>
            <h3>Feel Like Home With Best Medical Care</h3>
          </div>

          <div
            className={
              `grid grid-rows-2 justify-center gap-[20px] my-5 ` +
              styles.sec2Row
            }
          >
            <div className={` grid  sm:grid-flow-col  gap-[20px] `}>
              <div className={` ` + styles.content}>
                <img src="/homeIcon1.png" alt="" />
                <h2>Angioplasty</h2>
                <p>
                  Our team of highl professionals uses the latest heal
                  echnologies health quickly and easily.
                </p>
                <div className="text-2xl !text-[#C9C9C9] flex items-center ">
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </div>
              <div className={` ` + styles.content}>
                <img src="/homeIcon2.png" alt="" />
                <h2>Cardiology</h2>
                <p>
                  Our team of highl professionals uses the latest heal
                  echnologies health quickly and easily.
                </p>
                <div className="text-2xl !text-[#C9C9C9] flex items-center ">
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </div>
            </div>
            <div className={` grid sm:grid-flow-col `}>
              <div className={` ` + styles.content}>
                <img src="/homeIcon3.png" alt="" />
                <h2>Dental</h2>
                <p>
                  Our team of highl professionals uses the latest heal
                  echnologies health quickly and easily.
                </p>
                <div className="text-2xl text-primary02 flex items-center ">
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </div>
              <div className={` p-0  ` + styles.content}>
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
              <div className={` ` + styles.content}>
                <img src="/homeIcon4.png" alt="" />
                <h2>Eye Care</h2>
                <p>
                  Our team of highl professionals uses the latest heal
                  echnologies health quickly and easily.
                </p>
                <div className="text-2xl !text-[#C9C9C9] flex items-center ">
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </div>
              <div className={`p-0 ` + styles.content}>
                <img src="/Img2.png" alt="" className={`image `} />
              </div>
            </div>

            <div className={`grid sm:grid-flow-col gap-[20px] `}>
              <div className={` ` + styles.content}>
                <img src="/homeIcon5.png" alt="" />
                <h2>Orthopaedics</h2>
                <p>
                  Our team of highl professionals uses the latest heal
                  echnologies health quickly and easily.
                </p>
                <div className="text-2xl !text-[#C9C9C9] flex items-center ">
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </div>
              <div className={`` + styles.content}>
                <img src="/homeIcon6.png" alt="" />
                <h2>Angioplasty</h2>
                <p>
                  Our team of highl professionals uses the latest heal
                  echnologies health quickly and easily.
                </p>
                <div className="text-2xl !text-[#C9C9C9] flex items-center ">
                  <p className="pr-2 !text-black !text-lg">Read More </p>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
