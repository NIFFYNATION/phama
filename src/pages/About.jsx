import PagesNav from "../components/PagesNav";

function About() {
  return (
    <>
      <PagesNav />
      <div className="contain-fluid bg-[url(/BannerImg3.png)] bg-contain bg-no-repeat ">
        <div className=" contain-fluid">
          <div className=" min-h-[500px]"></div>
        </div>
      </div>
      <div className="contain text-center">
        <div className="">
          <h2 className="text-[35px] text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] sm:text-xl lg:text-2xl">
            Our team helps you get your life back on track.
          </h2>
          <p>
            Our team of highly trained professionals uses the latest healing
            technologies to restore you to pain-free health quickly and easily.
            We thoroughly evaluate & treat all of the contributing root factors
            related to your issue. Includes, but is not limit, your work and
            home stressors.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
