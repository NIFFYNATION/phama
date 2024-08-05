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
          <div className="contain-fluid bg-[url(/BannerImg1.png)] bg-center bg-no-repeat ">
            <div className="contain">
              <div className="w-full md:w-[80%] lg:w-[50%] min-h-[400px]  ">
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
          <div className="contain-fluid bg-[url(/BannerImg2.png)] mt-[160px] bg-center bg-no-repeat h-auto ">
            <div className="contain grid md:grid-cols">
              <div
                className={`bg-white w-full md:w-[80%] lg:w-[45%] md:ml-auto md:mr-auto lg:ml-auto lg:mr-0 mt-28 mb-28 p-5 pt-5 pb-5 md:p-10 `}
              >
                <div>
                  <p className={`p text-center `}>ABOUT US</p>
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
                      <p className="text-[13px] pl-2 ">
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

        <section>
          <div className={`contain `}>
            <div className="grid mt-[50px] mb-[50px] lg:grid-cols-5 sm:grid-cols-2 ">
              <div className={`flex items-center gap-2 justify-center `}>
                <img src="/homeAbtIcon3.png" alt="" />
                <span className={`text-primary01 font-bold text-[25px] span1 `}>
                  Spinal Care
                </span>
              </div>
              <div
                className={`flex items-center gap-2 justify-center mt-8 md:mt-8 lg:-mt-0 `}
              >
                <img src="/homeAbtIcon4.png" alt="" />
                <span className={`text-primary01 font-bold text-[25px] span2 `}>
                  Mr.Medical
                </span>
              </div>
              <div
                className={`flex items-center gap-2 justify-center mt-8 md:mt-8 lg:-mt-0 `}
              >
                <img src="/homeAbtIcon5.png" alt="" />
                <span className={`text-primary01 font-bold text-[25px] span3 `}>
                  Twohands
                </span>
              </div>
              <div
                className={`flex items-center gap-2 justify-center mt-8 md:mt-8 lg:-mt-0 `}
              >
                <img src="/homeAbtIcon6.png" alt="" />
                <span className={`text-primary01 font-bold text-[25px] span4 `}>
                  {" "}
                  Health Care
                </span>
              </div>
              <div
                className={`flex items-center gap-2 justify-center mt-8 md:mt-8 lg:-mt-0 `}
              >
                <img src="/homeAbtIcon7.png" alt="" />
                <span className={`text-primary01 font-bold text-[23px] span5 `}>
                  Medical Love
                </span>
              </div>
            </div>
            <div
              className={` bg-[url(/BlueBanner.png)] bg-center bg-no-repeat flex justify-center`}
            >
              <div
                className={`w-full md:w-[60%] lg:w-[50%] text-center pt-28 pb-28 `}
              >
                <p
                  className={`text-[23px] md:text-[30px] px-[24px] text-secondary03 font-semibold`}
                >
                  Schedule an imperson or virtual appointment today
                </p>
                <Button btnClass=" bg-primary02 py-[17px] px-[34px] !text-primary03 hover:bg-secondary03 hover:border hover:border-primary01 mt-5 ">
                  Book an Appointment
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/* w-full md:w-[80%] lg:w-[50%] min-h-[400px] */}
        <section>
          <div className="contain">
            <div className=" mt-[160px] grid gap-0 lg:gap-32  px-3 md:px-0 lg:grid-cols-2">
              <div className={` ` + styles.heroP}>
                <div>
                  <p className={`p !max-w-[180px] text-center `}>
                    SPEACIAL CARE
                  </p>
                  <h1 className="text-[25px] md:text-[30px] leading-10 font-bold">
                    We provide a best care for your health with specialist
                  </h1>
                </div>
                <div className="">
                  <p className={`mt-4 !text-[#545454] `}>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks.{" "}
                    <a href="/About" className="text-primary01 font-semibold">
                      Dynamically procrastinate B2C
                    </a>{" "}
                    users after installed base benefits. Dramatically visualize
                    customer.
                  </p>
                  <p className={`mt-6 !text-[#545454]  `}>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas. Dynamically innovate.
                  </p>
                </div>

                <div className={`flex items-center gap-2 mt-6 `}>
                  <img src="/homeIcon7.png" alt="" />
                  <span className={`font-semibold text-[15px] `}>
                    20+ years of excellence
                  </span>
                </div>
                <div className={`flex items-center gap-2 mt-6 `}>
                  <img src="/homeIcon7.png" alt="" />
                  <span className={` font-semibold text-[15px] `}>
                    Professional Experts
                  </span>
                </div>

                <Button btnClass=" bg-primary01 hover:bg-secondary03 border border-primary01 mt-6 ">
                  Discover Now
                </Button>
              </div>
              <div className="mt-20 lg:mt-0">
                <img src="/Img3.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="contain">
            <div className="mt-[160px] grid ">
              <div className={`text-center ` + styles.headingContent}>
                <TextBoderLine>SERVICES</TextBoderLine>

                <h3
                  className={`text-[25px] md:text-[30px] leading-10 font-bold max-w-[516px] ml-auto mr-auto mb-[30px] `}
                >
                  Feedbacks about our service from the bottom of heart
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {feedbacks.map(
                  ({
                    id,
                    profileName,
                    specialty,
                    profilePicture,
                    profileIcon,
                    comment,
                    stars,
                  }) => {
                    return (
                      <div
                        key={id}
                        className={`grid bg-secondary03 p-[46px] gap-8 `}
                      >
                        <div
                          className={`flex justify-between items-center border-b-[1px] border-[#CDCDCD] `}
                        >
                          <div className={`flex gap-4 profileName `}>
                            <div>
                              <img
                                src={profilePicture}
                                alt=""
                                className={`profilePicture `}
                              />
                            </div>
                            <div className={`profileName `}>
                              <h3
                                className={`md:text-[20px] font-bold pt-[9px] `}
                              >
                                {profileName}
                              </h3>
                              <p className={`text-[#545454] mb-6 `}>
                                {specialty}
                              </p>
                            </div>
                          </div>

                          <div>
                            <img
                              src={profileIcon}
                              alt=""
                              className={`profilePicture `}
                            />
                          </div>
                        </div>
                        <div className={`mt-[px] `}>
                          <p className={`text-[#545454] text-[16px] `}>
                            {comment}
                          </p>
                        </div>

                        <div className="flex gap-1">
                          <div className=" stars">{stars}</div>
                          <div className=" stars">{stars}</div>
                          <div className=" stars">{stars}</div>
                          <div className=" stars">{stars}</div>
                          <div className=" stars">{stars}</div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Homepage;

const feedbacks = [
  {
    id: 1,
    profileName: "Robert Davis",
    profilePicture: "/FeedbackImage1.png",
    profileIcon: "/FeedbackImage5.png",
    specialty: "Dental Patient",
    comment:
      "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.",

    stars: (
      <i className="fa-solid fa-star stars text-[20px] text-[#FBB837]"></i>
    ),
  },
  {
    id: 2,
    profileName: "Vanseena Adams",
    profilePicture: "/FeedbackImage2.png",
    profileIcon: "/FeedbackImage5.png",
    specialty: "Dental Patient",
    comment:
      "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.",
    stars: (
      <i className="fa-solid fa-star stars text-[20px] text-[#FBB837]"></i>
    ),
  },
  {
    id: 3,
    profileName: "Mark Brown",
    profilePicture: "/FeedbackImage3.png",
    profileIcon: "/FeedbackImage5.png",
    specialty: "Dental Patient",
    comment:
      "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.",
    stars: (
      <i className="fa-solid fa-star stars text-[20px] text-[#FBB837]"></i>
    ),
  },
  {
    id: 4,
    profileName: "Vanseena Adams",
    profilePicture: "/FeedbackImage4.png",
    profileIcon: "/FeedbackImage5.png",
    specialty: "Dental Patient",
    comment:
      "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.",
    stars: (
      <i className="fa-solid fa-star stars text-[20px] text-[#FBB837]"></i>
    ),
  },
];
