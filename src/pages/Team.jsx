import { useState } from 'react';
import { medicalExperts } from '../features/services/data/medicalExpertsData';
import AppointmentModal from "../components/AppointmentModal";

import Button from '../components/Button';
import { Link } from 'react-router-dom';

const SocialLink = ({ platform, link }) => {
  if (!link) return null;
  return (
    <a href={link}>
      <i className={`fa-brands fa-${platform}`}></i>
    </a>
  );
};

const DoctorCard = ({ photo, docName, specialty, socialLinks }) => (
  <div className="bg-[#f1f1f1] text-center p-8">
    <div className="flex justify-center">
      <img src={photo} alt={docName} />
    </div>
    <h2 className="mt-4 text-[#1c1c1c] font-bold text-[20px]">{docName}</h2>
    <p className="text-[#545454] font-lato text-[16px]">{specialty}</p>
    <div className="flex justify-center gap-4 mt-4 text-[16px]">
      <p className="text-primary01 text-[20px]"><SocialLink platform="facebook" link={socialLinks.facebook} /></p>
      <p className="text-primary01 text-[20px]"><SocialLink platform="instagram" link={socialLinks.instagram} /></p>
      <p className="text-primary01 text-[20px]"><SocialLink platform="twitter" link={socialLinks.twitter} /></p>
    </div>
  </div>
);

function Team() {
  const [noOfElement, setnoOfElement] = useState(6);
  const [allLoaded, setAllLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadMore = () => {
    const newCount = noOfElement + 3;
    if (newCount >= medicalExperts.MedsExperts.length) {
      setAllLoaded(true);
    }
    setnoOfElement(newCount);
  };

  const loadLess = () => {
    setnoOfElement(3);
    setAllLoaded(false);
  };

  const slice = medicalExperts.MedsExperts.slice(0, noOfElement);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section>
      <div className="contain-fluid bg-[url(/crewBanner.png)] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className="w-full min-h-[170px] sm:min-h-[350px] lg:min-h-[450px] xl:min-h-[230px] flex items-center justify-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C] text-center">
            The Doctorate Crew
          </h1>
        </div>
      </div>

      <div className="contain">
        <div className="grid mt-32">




      
        <div className="grid md:grid-cols-3 gap-8 text-secondary03">
            {slice.map((doctor) => (
              <Link key={doctor.id} to={`/teamsingle/${doctor.id}`}>
                <DoctorCard {...doctor} />
              </Link>
            ))}
          </div>
              
       
          <div className="grid md:grid-cols-2 mt-[20px] mb-[60px] items-center !mr-0 !ml-0 lg:mr-auto lg:ml-auto">
            

            <div className="">
              {!allLoaded && (
                <div onClick={loadMore} className="  mt-8 md:mt-0">
                  <Button btnClass="bg-primary02 hover:bg-secondary03 py-4 !text-primary01 hover:bg-secondary03 hover:border hover:border-primary01">
                    View All Doctors
                  </Button>
                </div>
              )}
              {allLoaded && (
                <div onClick={loadLess} className=" mt-8 md:mt-0">
                  <Button btnClass="bg-primary02 hover:bg-secondary03 py-4 !text-primary01 hover:bg-secondary03 hover:border hover:border-primary01">
                    Load Less
                  </Button>
                </div>
              )}
            </div>
          </div> 
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto">
  <div className="w-full md:w-1/2 bg-primary01 h-auto md:h-[500px] flex flex-col justify-center items-center text-center px-4 md:px-0 py-8">
    <div className="text-start ml-0 md:ml-10 w-full px-4 md:px-20">
      <p className="text-white uppercase tracking-wider mb-2 ring-1 w-fit  px-2 ring-[#2B78CA] ring-opacity-60">Book an Appointment</p>
      <p className="text-[20px] sm:text-[23px] md:text-[26px] lg:text-[30px] xl:text-[37px] text-white font-semibold mb-6 leading-tight">
        Our Medical Team is Ready to Help You.
      </p>
      <div className="flex flex-col lg:flex-row text-center md:text-start justify-start items-center sm:items-start lg:items-center gap-4">
        <Link
          className="bg-[#00E5A1] py-3 sm:py-4 px-4 text-[#1C1C1C] hover:bg-secondary03 text-sm sm:text-base font-semibold w-full sm:w-auto"
          onClick={openModal}
        >
          Book an Appointment
        </Link>
        <p className="text-white text-sm sm:text-base font-medium">(OR)</p>
        <p className="bg-white py-3 px-4 sm:py-4 text-[#1C1C1C] text-sm sm:text-base font-semibold w-full sm:w-auto">
          Call: 1-800-123-9999
        </p>
      </div>
    </div>
  </div>
  <div className="w-full md:w-1/2 bg-cover bg-center bg-no-repeat h-[300px] md:h-[500px]" style={{ backgroundImage: "url(/ImgTeam2.png)" }}>
    <img src="/ImgTeam2.png" alt="Doctor" className="w-full h-full object-cover" />
  </div>
</div>
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />

    </section>
  );
}

export default Team;