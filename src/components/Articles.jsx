import styles from "./Articles.module.css";
import { useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const data = {
  Article: [
    {
      id: 1,
      photo: "/HealthcareImg1.png",
      date: "18 August 2023",
      headline: "Open letter to the residents of Ellsworth, Maine",
    },
    {
      id: 2,
      photo: "/HealthcareImg2.png",
      date: "18 August 2023",
      headline: "What is a normal phenotype for aging mice?",
    },
    {
      id: 3,
      photo: "/HealthcareImg3.png",
      date: "18 August 2023",
      headline: "It was popularised inner the with the release of containing.",
    },
    {
      id: 4,
      photo: "/HealthcareImg4.png",
      date: "18 August 2023",
      headline: "The Versatile Mouse Model for Rare Disease Research",
    },
  ],
};

function Articles() {
  const [noOfElement, setnoOfElement] = useState(4);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  const slice = data.Article.slice(0, noOfElement);

  return (
    <div className="contain">
      <div className="grid">
        <div className="grid md:grid-cols-2 mt-[120px] mb-[20px] items-center !mr-0 !ml-0 lg:mr-auto lg:ml-auto">
          <div className="">
            <p
              className={`p !border-0 ring-1 p-1 ring-[#CECECE] min-w-[170px] text-center `}
            >
              News Update
            </p>
            <h3 className="text-[25px] md:text-[30px] text-[#1C1C1C]  leading-10 font-bold">
              Latest Healthcare Articles
            </h3>
          </div>

          <div onClick={() => loadMore()} className="md:ml-auto mt-8 md:mt-0">
            <Button
              btnClass={
                `py-3 !text-primary01 bg-secondary03 hover:bg-primary01 border border-[#CECECE] ` +
                styles.btn
              }
            >
              Read All News
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-4">
          {slice.map((item, index) => {
            return (
              <>
                <NavLink to="/">
                  <div
                    key={index}
                    className={
                      `flex sm:flex gap-2 sm:gap-6 mt-6 items-center text-[#1C1C1C] lg:w-full ` +
                      styles.artcle
                    }
                  >
                    <img
                      className="w-[150px] sm:w-[228px]"
                      src={item.photo}
                      alt=""
                    />
                    <div className="">
                      <p className="p ring-1 p-1 mt-6 ring-[#CECECE] min-w-[150px] sm:min-w-[180px]">
                        {item.date}
                      </p>
                      <h3 className="text-[16px] font-[600]">
                        {item.headline}
                      </h3>
                    </div>
                  </div>
                </NavLink>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Articles;
