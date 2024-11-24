import React from "react";
import styles from "./Articles.module.css";
import { useState } from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { articleData } from "../features/services/data/articleData";

function Articles({
  customStyles = {},
  containerClass,
  gridClass,
  headingClass,
  articles = [],
  link,
  content,
  showHeader = true,
  usePagination = false,
  showReadMore = false,
}) {
  const [noOfElement, setnoOfElement] = useState(6);
  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  const displayedArticles = usePagination
    ? articles
    : articleData.Article.slice(0, noOfElement);

  return (
    <div className={containerClass || "contain"}>
      <div className={gridClass || "grid"}>
        {showHeader && (
          <div className="grid md:grid-cols-2 mt-[120px] mb-[20px] items-center !mr-0 !ml-0 lg:mr-auto lg:ml-auto">
            <div className="">
              <p
                className={`p !border-0 ring-1 p-1 ring-[#CECECE] min-w-[170px] text-center ${customStyles?.tag || ""}`}
              >
                News Update
              </p>
              <h3
                className={`text-[25px] md:text-[30px] text-[#1C1C1C] leading-10 font-bold ${headingClass || ""}`}
              >
                Latest Healthcare Articles
              </h3>
            </div>

            {!usePagination && (
              <div onClick={loadMore} className="md:ml-auto mt-8 md:mt-0">
                <Button
                  btnClass={`py-3 !text-primary01 bg-secondary03 hover:bg-primary01 border border-[#CECECE] ${styles.btn} ${customStyles?.button || ""}`}
                >
                  Read All News
                </Button>
              </div>
            )}
          </div>
        )}

        <div
          className={`grid lg:grid-cols-2 gap-4 ${customStyles?.articleGrid || ""}`}
        >
          {displayedArticles.map((item) => (
            <React.Fragment key={item.id}>
              <NavLink to={`/blog/${item.id}`}>
                <div
                  className={`flex sm:flex gap-2 sm:gap-6 mt-6 items-center text-[#1C1C1C] lg:w-full ${styles.artcle} ${customStyles?.articleCard || ""}`}
                >
                  <img
                    className={`w-[150px] sm:w-[228px] ${customStyles?.image || ""}`}
                    src={item.photo}
                    alt=""
                  />
                  <div className={customStyles?.content || ""}>
                    <p
                      className={`p ring-1 p-1 mt-6 ring-[#CECECE] min-w-[170px] sm:min-w-[180px] ${customStyles?.date || ""}`}
                    >
                      {item.date}
                    </p>
                    <h3
                      className={`text-[16px] font-[600] ${customStyles?.headline || ""}`}
                    >
                      {item.headline}
                    </h3>
                    {showReadMore && (
                      <p className="text-primary01 text-xl mt-4 font-medium">
                        Read more
                      </p>
                    )}
                  </div>
                </div>
              </NavLink>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Articles;
