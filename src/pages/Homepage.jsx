import Button from "../components/Button";
import PagesNav from "../components/PagesNav";
import ServicesCard from "../components/Servicescard";
import TextBoderLine from "../components/Textborderline";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <>
      <body>
        <section>
          <PagesNav />
        </section>

        <section>
          <div className="contain-fluid bg-[url(/BannerImg1.png)]  bg-cover bg-no-repeat h-auto ">
            <div className="contain">
              <div className="w-full md:w-2/4 min-h-[400px]  ">
                <div className={`pt-32 pb-32 ` + styles.heroP}>
                  <p className="text-base bg-primary02 w-4/5 md:w-5/12 text-center mb-4 mt-7">
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

        <section>
          <ServicesCard />
        </section>

        <section>
          <div className="contain-fluid bg-[url(/BannerImg2.png)]  bg-cover bg-no-repeat h-auto ">
            <div className="contain grid md:grid-cols">
              <div
                className={`bg-white w-full md:w-[45%] ml-auto mt-28 mb-28 p-2 pt-5 pb-5 md:p-10 `}
              >
                <div>
                  <TextBoderLine>ABOUT US</TextBoderLine>

                  <div className="mt-2">
                    <h2 className="text-[30px] mb-2 font-semibold">
                      The Heart And Science Of Medicate Test
                    </h2>
                    <p className="text-[14px]">
                      Capitalize on low hanging fruit to identify a ballpark
                      value added activity to beta test. Override the digital
                      divide with information highway will close.
                    </p>
                  </div>
                  <div className={`grid md:grid-cols-2 gap-4 mt-6 `}>
                    <div className="flex items-center ">
                      <img
                        src="/homeAbtIcon1.png"
                        alt=""
                        className="w-[50px] h-[50px]"
                      />
                      <p className="text-[13px] pl-2">
                        Multi Speciality Pharma Treatment
                      </p>
                    </div>

                    <div className="flex items-center">
                      <img
                        src="/homeAbtIcon2.png"
                        alt=""
                        className="w-[50px] h-[50px] mr-2"
                      />
                      <p className="text-[13px] pl-2">
                        24 Hours Medical Service
                      </p>
                    </div>
                  </div>
                  <Button btnClass=" bg-primary01 hover:bg-secondary03 border border-primary01 mt-9 ">
                    More About Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Homepage;
