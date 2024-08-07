import Button from "./Button";

const MedsExperts = [
  {
    id: 1,
    photo: "/HomeDoc1.png",
    docName: "Vanseena Adams",
    specialty: "Dental Patient",
    icon1: (
      <a href="/">
        <i class="fa-brands fa-instagram"></i>
      </a>
    ),
    icon2: (
      <a href="/">
        <i class="fa-brands fa-facebook"></i>
      </a>
    ),
    icon3: (
      <a href="/">
        <i class="fa-brands fa-twitter"></i>
      </a>
    ),
  },

  {
    id: 2,
    photo: "/HomeDoc2.png",
    docName: "Dr. Helen Wilmore",
    specialty: "Dental Patient",
    icon1: (
      <a href="/">
        <i class="fa-brands fa-instagram"></i>
      </a>
    ),
    icon2: (
      <a href="/">
        <i class="fa-brands fa-facebook"></i>
      </a>
    ),
    icon3: (
      <a href="/">
        <i class="fa-brands fa-twitter"></i>
      </a>
    ),
  },
  {
    id: 3,
    photo: "/HomeDoc3.png",
    docName: "Dr. Kate Winslot",
    specialty: "Dental Patient",
    icon1: (
      <a href="/">
        <i class="fa-brands fa-instagram"></i>
      </a>
    ),
    icon2: (
      <a href="/">
        <i class="fa-brands fa-facebook"></i>
      </a>
    ),
    icon3: (
      <a href="/">
        <i class="fa-brands fa-twitter"></i>
      </a>
    ),
  },
  //   {
  //     id: 4,
  //     photo: "/HomeDoc3.png",
  //     docName: "Dr. Kate Winslot",
  //     specialty: "Dental Patient",
  //     icon1: (
  //       <a href="/">
  //         <i class="fa-brands fa-instagram"></i>
  //       </a>
  //     ),
  //     icon2: (
  //       <a href="/">
  //         <i class="fa-brands fa-facebook"></i>
  //       </a>
  //     ),
  //     icon3: (
  //       <a href="/">
  //         <i class="fa-brands fa-twitter"></i>
  //       </a>
  //     ),
  //   },
  //   {
  //     id: 5,
  //     photo: "/HomeDoc3.png",
  //     docName: "Dr. Kate Winslot",
  //     specialty: "Dental Patient",
  //     icon1: (
  //       <a href="/">
  //         <i class="fa-brands fa-instagram"></i>
  //       </a>
  //     ),
  //     icon2: (
  //       <a href="/">
  //         <i class="fa-brands fa-facebook"></i>
  //       </a>
  //     ),
  //     icon3: (
  //       <a href="/">
  //         <i class="fa-brands fa-twitter"></i>
  //       </a>
  //     ),
  //   },
  //   {
  //     id: 6,
  //     photo: "/HomeDoc3.png",
  //     docName: "Dr. Kate Winslot",
  //     specialty: "Dental Patient",
  //     icon1: (
  //       <a href="/">
  //         <i class="fa-brands fa-instagram"></i>
  //       </a>
  //     ),
  //     icon2: (
  //       <a href="/">
  //         <i class="fa-brands fa-facebook"></i>
  //       </a>
  //     ),
  //     icon3: (
  //       <a href="/">
  //         <i class="fa-brands fa-twitter"></i>
  //       </a>
  //     ),
  //   },
];

function MedicalExperts() {
  return (
    <section>
      <div className="contain-fluid bg-primary01">
        <div className="contain">
          <div className="grid">
            <div className="grid md:grid-cols-2 mt-[120px] mb-[60px] items-center !mr-0 !ml-0 lg:mr-auto lg:ml-auto">
              <div className="text-secondary03">
                <p
                  className={`p !border-0 ring-1 p-1 ring-[#2B78CA] min-w-max start !text-secondary03 `}
                >
                  MEDICAL EXPERTS
                </p>
                <h3 className="text-[25px] md:text-[30px]  leading-10 font-bold">
                  The Professional Doctors
                </h3>
              </div>

              <div className="md:ml-auto mt-8 md:mt-0">
                <Button btnClass="bg-primary02 hover:bg-secondary03 py-4 !text-primary01 hover:bg-secondary03 hover:border hover:border-primary01 ">
                  View All Doctors
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-secondary03">
              {MedsExperts.map(
                ({ id, photo, specialty, docName, icon1, icon2, icon3 }) => {
                  return (
                    <div key={id} className="bg-[#004A99] text-center p-8">
                      <div className="flex justify-center">
                        <img src={photo} alt={photo} />
                      </div>
                      <h2 className="mt-4">{docName}</h2>
                      <p>{specialty}</p>

                      <div className="flex justify-center gap-4 mt-4 text-[16px]">
                        {icon1}
                        {icon2}
                        {icon3}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MedicalExperts;
