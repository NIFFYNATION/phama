import MedicalExperts from "../components/MedicalExperts";
import PagesNav from "../components/PagesNav";
import ServicesCard from "../components/Servicescard";

function Services() {
  return (
    <>
      <div className="contain-fluid bg-[url(/servicesBannerImage.png)] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className="w-full min-h-[170px] sm:min-h-[350px] lg:min-h-[450px] xl:min-h-[230px] flex items-center justify-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C] text-center">
            Our Services
          </h1>
        </div>
      </div>
      <ServicesCard />
      <div
        className={`contain mt-[150px] mb-[150px] py-16 bg-[url(/twoDocsImage.png)] bg-cover h-[500px] bg-no-repeat flex justify-center`}
      >
        <div
          className={`w-full md:w-[60%] px-8 bg-white lg:w-[50%] text-center flex items-center justify-center `}
        >
          <div>
            <p
              className={`w-[150px] font-['Montserrat'] tracking-[3px] mx-auto text-center text-[23px] md:text-[30px] px-[24px] mb-8 text-[#1C1C1C] ring-1 ring-[#CECECE] ring-opacity-60 `}
            >
              TIME
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C] text-center">
              Working Hours
            </h2>
            <p className="text-[#545454] mt-4 text-1xl sm:text-2xl">
              Sunday To Friday 9.00 am - 10.00 pm Saturday Closed
            </p>
          </div>
        </div>
      </div>
      <MedicalExperts />
    </>
  );
}

export default Services;
