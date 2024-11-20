import { useState, useRef } from "react";
import AppointmentModal from "../components/AppointmentModal";
import { Link } from "react-router-dom";

function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="contain-fluid bg-[url(/BannerImg3.png)]  bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className=" contain-fluid">
          <div className="min-h-[170px] sm:min-h-[350px] lg:min-h-[450px] xl:min-h-[500px]"></div>
        </div>
      </div>
      <div className="contain text-center mt-0 md:mt-16">
        <div className="mt-6 w-[90%] mx-auto">
          <h2 className="text-[25px] md:text-[30px] text-[#111418]  font-bold leading-tight tracking-[-0.015em] mb-4 w-[100%] md:w-[70%] lg:w-[45%] mx-auto">
            Our team helps you get your life back on track.
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#545454] font-medium">
            Our team of highly trained professionals uses the latest healing
            technologies to restore you to pain-free health quickly and easily.
            We thoroughly evaluate & treat all of the contributing root factors
            related to your issue. Includes, but is not limit, your work and
            home stressors.
          </p>
        </div>
      </div>

      <div className="relative w-[90%] lg:w-full max-w-[69rem] mx-auto object-contain">
        <video
          ref={videoRef}
          className="w-full h-[100%] aspect-video "
          src="/001.mp4"
          poster="/vidBanner.jpg"
          controls
        >
          Your browser does not support the video tag.
        </video>
        {!isPlaying && (
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          >
            <img src="/playButton.png" alt="play" className="h-24 w-24" />
          </button>
        )}
      </div>
      <div className="contain mt-[100px] font-medium">
        <div className="flex flex-col md:flex-row gap-16 md:gap-16 lg:gap-32 mx-auto">
          <div className="w-[90%] md:w-1/2 mx-auto">
            <p
              className={`w-[160px] text-center text-[#1C1C1C] ring-1 ring-[#CECECE] ring-opacity-60 font-semibold tracking-[3px] text-[14px] font-['Montserrat']`}
            >
              THE LEADERS
            </p>
            <div className="mt-2">
              <h2 className="text-[30px] mb-2 font-semibold">
                The Heart And Science Of Medicate Test
              </h2>
              <p className="text-[16px] text-[#545454]">
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                information highway will close.
              </p>
              <p className="text-[16px] mt-8 text-[#545454]">
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                information highway will close.
              </p>
            </div>
          </div>
          <div className="w-[90%] md:w-1/2 mx-auto">
            <p
              className={`w-[160px] text-center text-[#1C1C1C] ring-1 ring-[#CECECE] ring-opacity-60 font-semibold tracking-[3px] text-[14px] font-['Montserrat']`}
            >
              OUR STORY
            </p>
            <div className="mt-2">
              <h2 className="text-[30px] mb-2 font-semibold">
                Our mission is to help patients live better.
              </h2>
              <p className="text-[16px] mb-4 text-[#545454] ">
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                information highway will close.
              </p>
              <ul className="list-none pl-0">
                <li className="flex items-center mb-2">
                  <span className="text-[#545454] mr-2 text-4xl leading-none flex items-center">
                    •
                  </span>
                  <span className="text-[16px] text-[#545454]">
                    Over 400 leading hospitals and clinics
                  </span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-[#545454] mr-2 text-4xl leading-none flex items-center">
                    •
                  </span>
                  <span className="text-[16px] text-[#545454]">
                    Trusted doctors across 20+ specialties
                  </span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-[#545454] mr-2 text-4xl leading-none flex items-center">
                    •
                  </span>
                  <span className="text-[16px] text-[#545454]">
                    Award-winning practice management
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className={` mt-[100px] bg-[url(/BlueBanner.png)] bg-cover bg-center bg-no-repeat w-full py-8 md:py-12 lg:py-16`}
      >
        <div
          className={`w-full md:w-[60%] lg:w-[60%] xl:w-[50%] mx-auto text-center px-4 md:px-0 pt-28 pb-28`}
        >
          <p
            className={`text-[20px] sm:text-[23px] md:text-[26px] lg:text-[30px] text-secondary03 font-semibold mb-6 leading-tight w-[100%] md:w-[70%] mx-auto`}
          >
            Online consultations with Certified doctors
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Link
              className="bg-[#00E5A1] py-3 px-6 sm:py-4 sm:px-8 !text-[#1C1C1C] hover:bg-secondary03 text-sm sm:text-base font-semibold w-[60%] sm:w-auto"
              onClick={openModal}
            >
              Book an Appointment
            </Link>

            <p className="text-white text-sm sm:text-base font-medium">(OR)</p>

            <p className="bg-white py-3 px-6 sm:py-4 sm:px-8 !text-[#1C1C1C] text-sm sm:text-base font-semibold w-[60%] sm:w-auto">
              Call: 1-800-123-9999
            </p>
          </div>
        </div>
      </div>
      <div className="contain mt-[100px] mb-[100px]">
        <div className="text-start flex flex-col md:flex-row gap-16 md:gap-6 items-center mb-12">
          <h2 className="text-[30px] md:text-[36px] font-bold mb-4 w-[90%] md:w-1/2">
            Our values that drive success
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#545454] w-[90%] md:w-1/2 mx-auto">
            Our team of highly trained professionals uses the latest healing
            technologies to restore you to pain-free health quickly and easily.
            We thoroughly evaluate & treat all of the contributing root factors
            related to your issue. Includes, but is not limit, your work and
            home stressors.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { img: "/bio-tech-image.png", title: "Bio Technology" },
            { img: "/vaccine-image.png", title: "Vaccine" },
            { img: "/latest-tech-image.png", title: "Latest Technology" },
            { img: "/expert-doctors-image.png", title: "Expert Doctors" },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center ring-1 ring-[#CECECE] px-6 md:px-10 py-8 md:py-12  ring-opacity-60  w-[80%] md:w-full mx-auto"
            >
              <div className="bg-[#F0F5FF] w-20 h-20 rounded-full ring-1 ring-[#CECECE] ring-opacity-60 flex items-center justify-center mx-auto mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-[18px] font-semibold mb-2">{item.title}</h3>
              <p className="text-[14px] text-[#545454] w-[90%] md:w-full mx-auto">
                Our team of highly trained professionals uses the latest healing
                technologies.
              </p>
            </div>
          ))}
        </div>
      </div>

      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default About;
