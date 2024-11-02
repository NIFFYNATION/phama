import { useState } from 'react';
import { medicalExperts } from '../features/services/data/medicalExpertsData';
import Button from '../components/Button';

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
              <DoctorCard key={doctor.id} {...doctor} />
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
    </section>
  );
}

export default Team;