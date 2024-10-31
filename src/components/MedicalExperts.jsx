import Button from "./Button";
import { useState } from "react";
import Counter from "./Counter";

const data = {
  MedsExperts: [
    {
      id: 1,
      photo: "/HomeDoc1.png",
      docName: "Vanseena Adams",
      specialty: "Dental Patient",
      facebook: "https://facebook.com",
      instagram: "#",
      twitter: "#",
    },

    {
      id: 2,
      photo: "/HomeDoc2.png",
      docName: "Dr. Helen Wilmore",
      specialty: "Dental Patient",
      facebook: "https://facebook.com",
      instagram: "#",
      twitter: "#",
    },
    {
      id: 3,
      photo: "/HomeDoc3.png",
      docName: "Dr. Kate Winslot",
      specialty: "Dental Patient",
      facebook: "https://facebook.com",
      instagram: "#",
      twitter: "#",
    },

    {
      id: 4,
      photo: "/HomeDoc3.png",
      docName: "Dr. Kate Winslot",
      specialty: "Dental Patient",
      facebook: "https://facebook.com",
      instagram: "#",
      twitter: "#",
    },
    {
      id: 5,
      photo: "/HomeDoc1.png",
      docName: "Dr. Kate Winslot",
      specialty: "Dental Patient",
      facebook: "https://facebook.com",
      instagram: "#",
      twitter: "#",
    },
    {
      id: 6,
      photo: "/HomeDoc2.png",
      docName: "Dr. Kate Winslot",
      specialty: "Dental Patient",
      facebook: "https://facebook.com",
      instagram: "#",
      twitter: "#",
    },
  ],
};

function MedicalExperts({
  title = "MEDICAL EXPERTS",
  heading = "The Professional Doctors",
}) {
  const [noOfElement, setnoOfElement] = useState(3);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  const slice = data.MedsExperts.slice(0, noOfElement);

  const showFacebook = function (link) {
    return link !== "" ? (
      <a href={link}>
        <i className="fa-brands fa-facebook"></i>
      </a>
    ) : (
      ""
    );
  };
  const showInstagram = function (link) {
    return link !== "" ? (
      <a href={link}>
        <i className="fa-brands fa-instagram"></i>
      </a>
    ) : (
      ""
    );
  };
  const showTwitter = function (link) {
    return link !== "" ? (
      <a href={link}>
        <i className="fa-brands fa-twitter"></i>
      </a>
    ) : (
      ""
    );
  };

  return (
    <section>
      <div className={`contain-fluid bg-primary01`}>
        <div className="contain">
          <div className="grid">
            <div className="grid md:grid-cols-2 mt-[120px] mb-[60px] items-center !mr-0 !ml-0 lg:mr-auto lg:ml-auto">
              <div className="text-secondary03">
                <p
                  className={`p !border-0 ring-[#2B78CA]  text-center !text-secondary03 `}
                >
                  {title}
                </p>
                <h3 className="text-[25px] md:text-[30px]  leading-10 font-bold">
                  {heading}
                </h3>
              </div>

              <div
                onClick={() => loadMore()}
                className="md:ml-auto mt-8 md:mt-0"
              >
                <Button btnClass="bg-primary02 hover:bg-secondary03 py-4 !text-primary01 hover:bg-secondary03 hover:border hover:border-primary01 ">
                  View All Doctors
                </Button>
              </div>
            </div>

            <div className={`grid md:grid-cols-3 gap-8 text-secondary03`}>
              {slice.map((item, index) => {
                return (
                  <div key={index} className={` bg-[#004A99] text-center p-8`}>
                    <div className="flex justify-center">
                      <img src={item.photo} alt={item.photo} />
                    </div>
                    <h2 className="mt-4">{item.docName}</h2>
                    <p>{item.specialty}</p>
                    <div className="flex justify-center gap-4 mt-4 text-[16px]">
                      {showFacebook(item.facebook)}
                      {showInstagram(item.instagram)}
                      {showTwitter(item.twitter)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Counter />
      </div>
    </section>
  );
}

export default MedicalExperts;
