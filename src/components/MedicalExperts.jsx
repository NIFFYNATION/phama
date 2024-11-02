import { useState } from "react";
import Button from "./Button";
import Counter from "./Counter";
import { medicalExperts } from "../features/services/data/medicalExpertsData";

const SocialLink = ({ platform, link }) => {
  if (!link) return null;
  return (
    <a href={link}>
      <i className={`fa-brands fa-${platform}`}></i>
    </a>
  );
};

const DoctorCard = ({ photo, docName, specialty, socialLinks }) => (
  <div className="bg-[#004A99] text-center p-8">
    <div className="flex justify-center">
      <img src={photo} alt={docName} />
    </div>
    <h2 className="mt-4">{docName}</h2>
    <p>{specialty}</p>
    <div className="flex justify-center gap-4 mt-4 text-[16px]">
      <SocialLink platform="facebook" link={socialLinks.facebook} />
      <SocialLink platform="instagram" link={socialLinks.instagram} />
      <SocialLink platform="twitter" link={socialLinks.twitter} />
    </div>
  </div>
);

function MedicalExperts({
  title = "MEDICAL EXPERTS",
  heading = "The Professional Doctors",
}) {
  const [noOfElement, setnoOfElement] = useState(3);
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
      <div className={`contain-fluid bg-primary01`}>
        <div className="contain">
          <div className="grid">
            <div className="grid md:grid-cols-2 mt-[120px] mb-[60px] items-center !mr-0 !ml-0 lg:mr-auto lg:ml-auto">
              <div className="text-secondary03">
                <p className={`p flex  !border-0  ring-[#2B78CA] text-center !text-secondary03`}>
                  {title}
                </p>
                <h3 className="text-[25px] md:text-[30px] leading-10 font-bold">
                  {heading}
                </h3>
              </div>

              {!allLoaded && (
                <div onClick={loadMore} className="md:ml-auto mt-8 md:mt-0">
                  <Button btnClass="bg-primary02 hover:bg-secondary03 py-4 !text-primary01 hover:bg-secondary03 hover:border hover:border-primary01">
                    View All Doctors
                  </Button>
                </div>
              )}

              {allLoaded && (
                <div onClick={loadLess} className="md:ml-auto mt-8 md:mt-0">
                  <Button btnClass="bg-primary02 hover:bg-secondary03 py-4 !text-primary01 hover:bg-secondary03 hover:border hover:border-primary01">
                    Load Less
                  </Button>
                </div>
              )}
            </div>

            <div className={`grid md:grid-cols-3 gap-8 text-secondary03`}>
              {slice.map((item) => (
                <DoctorCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
        <Counter />
      </div>
    </section>
  );
}

export default MedicalExperts;