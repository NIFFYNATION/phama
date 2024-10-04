import PagesNav from "../components/PagesNav";
import { useState, useRef } from "react";

function About() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

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
  return (
    <>
      <PagesNav />
      <div className="contain-fluid bg-[url(/BannerImg3.png)] bg-contain bg-no-repeat ">
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

      <div className="relative w-[90%] lg:w-full max-w-5xl mx-auto object-contain mt-">
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
            {/* <img src="/playButton.png" alt="play" className="h-24 w-24" /> */}
          </button>
        )}
      </div>
    </>
  );
}

export default About;
