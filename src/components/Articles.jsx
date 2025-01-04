import React, { useState, useEffect } from "react";
import styles from "./Articles.module.css";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import supabase from "/services/supabase";

function Articles({
  customStyles = {},
  containerClass,
  gridClass,
  headingClass,
  articles: providedArticles,
  showHeader = true,
  usePagination = false,
  showReadMore = false,
}) {
  const [recentArticles, setRecentArticles] = useState([]);
  const [noOfElement, setnoOfElement] = useState(6);
  const [loading, setLoading] = useState(!providedArticles);

  useEffect(() => {
    if (providedArticles) {
      setRecentArticles(providedArticles);
      setLoading(false);
      return;
    }

    const fetchRecentArticles = async () => {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(6);

        if (error) throw error;
        setRecentArticles(data || []);
      } catch (error) {
        console.error('Error fetching recent articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentArticles();
  }, [providedArticles]);

  const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement);
  };
  
  const displayedArticles = usePagination
    ? recentArticles
    : recentArticles.slice(0, noOfElement);

  if (loading) return <div className="text-center py-4">Loading articles...</div>;

  return (
    <div className={containerClass || "contain"}>
      <div className={gridClass || "grid"}>
        {showHeader && (
          <div className="grid md:grid-cols-2 mt-[120px] mb-[20px] items-center !mr-0 !ml-0 lg:mr-auto lg:ml-auto">
            <div className="">
              <p className={`p !border-0 ring-1 p-1 ring-[#CECECE] min-w-[170px] text-center ${customStyles?.tag || ""}`}>
                News Update
              </p>
              <h3 className={`text-[25px] md:text-[30px] text-[#1C1C1C] leading-10 font-bold ${headingClass || ""}`}>
                Latest Healthcare Articles
              </h3>
            </div>

            {showHeader && !usePagination && (
              <div className="md:ml-auto mt-8 md:mt-0">
                <NavLink to="/blog">
                  <Button
                    btnClass={`py-3 !text-primary01 bg-secondary03 hover:bg-primary01 border border-[#CECECE] ${styles.btn} ${customStyles?.button || ""}`}
                  >
                    Read All News
                  </Button>
                </NavLink>
              </div>
            )}
          </div>
        )}

        <div className={`grid lg:grid-cols-2 gap-4 ${customStyles?.articleGrid || ""}`}>
          {displayedArticles.map((article) => (
            <React.Fragment key={article.id}>
              <NavLink to={`/blog/${article.id}`}>
                <div className={`flex sm:flex gap-2 sm:gap-6 mt-6 items-center text-[#1C1C1C] lg:w-full ${styles.artcle} ${customStyles?.articleCard || ""}`}>
                  <img
                    className={`w-[150px] sm:w-[228px] ${customStyles?.image || ""}`}
                    src={article.photo_url || article.photo}
                    alt={article.title}
                  />
                  <div className={customStyles?.content || ""}>
                    <p className={`p ring-1 p-1 mt-6 ring-[#CECECE] min-w-[170px] sm:min-w-[180px] ${customStyles?.date || ""}`}>
                      {new Date(article.created_at).toLocaleDateString()}
                    </p>
                    <h3 className={`text-[16px] font-[600] ${customStyles?.headline || ""}`}>
                      {article.headline || article.title}
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
