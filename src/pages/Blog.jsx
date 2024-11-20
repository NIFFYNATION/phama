import Articles from "../components/Articles";
import Pagination from "../components/Pagination";
import { articleData } from "../features/services/data/articleData";
import { useState, useEffect } from "react";

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedArticles, setDisplayedArticles] = useState([]);
  const articlesPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(articleData.Article.length / articlesPerPage);

  // Update displayed articles when page changes
  useEffect(() => {
    // Calculate how many articles to show based on current page
    const articlesToShow = currentPage * articlesPerPage;
    // Get articles from start to current page (accumulative)
    const articles = articleData.Article.slice(0, articlesToShow);
    setDisplayedArticles(articles);
    
    // Smooth scroll to top
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const blogStyles = {
    tag: 'bg-blue-100',
    button: 'bg-blue-500 text-white',
    articleGrid: 'grid lg:grid-cols-3',
    articleCard: '!grid bg-gray-50 rounded-lg shadow',
    image: '!w-full',
    content: 'p-4',
    date: 'bg-blue-50',
    headline: 'text-xl !text-[#1C1C1C]'
  };

  return (
    <>
      <div className="contain-fluid bg-[url(/blogBannerImage.png)] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className="w-full min-h-[170px] sm:min-h-[350px] lg:min-h-[450px] xl:min-h-[230px] flex items-center justify-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C1C1C] text-center">
            Blog
          </h1>
        </div>
      </div>
      
      <div className="contain mt-[110px]">
        <Articles 
          customStyles={blogStyles}
          containerClass="max-w-7xl mx-auto px-4"
          gridClass="grid gap-8"
          headingClass="text-blue-900"
          articles={displayedArticles}
          showHeader={false}
          usePagination={true}
          showReadMore={true}
        />

        {/* Only show pagination if there are more articles to load */}
        {displayedArticles.length < articleData.Article.length && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </>
  );
}

export default Blog;
