import Articles from "../components/Articles";
import Pagination from "../components/Pagination";
import { useState, useEffect } from "react";
import  supabase, {supabaseUrl } from "/services/supabase.js";
import { format, parseISO } from "date-fns";

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const articlesPerPage = 6;

  useEffect(() => {
    fetchArticles();
  }, [currentPage]); // Re-fetch when page changes

  const fetchArticles = async () => {
    try {
      // First, get the total count
      const { count } = await supabase
        .from('articles')
        .select('*', { count: 'exact', head: true });

      setTotalCount(count || 0);

      // Then fetch the paginated data
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false })
        .range((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage - 1);

      if (error) throw error;

      // Transform the data and handle image URLs
      const transformedArticles = data.map(article => {
        let formattedDate = 'No date';
        try {
          if (article.created_at) {
            formattedDate = format(new Date(article.created_at), 'MMMM d, yyyy');
          }
        } catch (error) {
          console.error('Date formatting error:', error);
        }

        const photoUrl = article.photo_url
          ? article.photo_url.startsWith('http')
            ? article.photo_url
            : `${supabaseUrl}/storage/v1/object/public/articles/${article.photo_url}`
          : '/default-article-image.png';

        return {
          id: article.id,
          title: article.title || '',
          content: article.content || '',
          photo: photoUrl,
          photo_url: photoUrl,
          author: article.author || '',
          date: formattedDate,
          headline: article.headline || article.title || ''
        };
      });

      setArticles(transformedArticles);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(totalCount / articlesPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top on page change
  };

  const blogStyles = {
    tag: 'bg-blue-100',
    button: 'bg-blue-500 text-white',
    articleGrid: 'grid lg:grid-cols-3',
    articleCard: '!grid bg-gray-50 rounded-lg shadow',
    image: '!w-full h-[200px] object-cover',
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
        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <>
            {articles.length > 0 ? (
              <>
                <Articles 
                  customStyles={blogStyles}
                  containerClass="max-w-7xl mx-auto px-4"
                  gridClass="grid gap-8"
                  headingClass="text-blue-900"
                  articles={articles}
                  showHeader={false}
                  showReadMore={true}
                  usePagination={true}
                />

                {totalPages > 1 && (
                  <div className="mt-8">
                    <Pagination 
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                    />
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8 text-gray-500">
                No articles available.
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Blog;