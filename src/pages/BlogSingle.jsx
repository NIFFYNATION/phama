import { useParams } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";
import { format, isValid } from "date-fns";
import { articleData } from "../features/services/data/articleData";
import Comments from '../components/Comments';



const BlogSingle = () => {
  const { id } = useParams();

  // Find the article from articleData
  const article = articleData.Article.find(
    (article) => article.id === parseInt(id)
  );

  // If article not found, show error message
  if (!article) {
    return <div className="contain">Article not found</div>;
  }

  const shareUrl = `${window.location.origin}/blog/${article.id}`;
  const jsDate = new Date(article.date);

  return (
    <>
      <div className="contain-fluid absolute top-[160px] left-0 right-0 bg-[#DCEDFE] h-[200px] sm:h-[250px] md:h-[400px] items-center justify-center"></div>
      <div className="relative mt-[50px]">
        <div>
          <p className="text-sm text-center text-gray-600">
            {isValid(jsDate)
              ? format(jsDate, "MMMM d, yyyy • h:mm a")
              : "No date available"}
          </p>
        </div>
        <h2 className="text-xl text-center sm:text-3xl md:text-4xl font-bold leading-tight mb-4 sm:mb-8 mt-[50px]">
          {article.title}
        </h2>
        <div className="contain relative h-[300px] w-full sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
          <img
            src={article.photo}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-lg"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="contain flex flex-col sm:flex-row items-start sm:items-center justify-between mt-16">
          <div className="flex items-center mb-2 sm:mb-0">
            <img
              src={article.authorImage}
              alt={article.author}
              className="w-8 h-8 sm:w-16 sm:h-16 rounded-full mr-2 sm:mr-4"
              loading="lazy"
            />

            <div>
              <p className="font-semibold text-sm sm:text-base">
                {article.author}
              </p>
              <p className="text-sm sm:text-base text-[#545454]">
                {article.authorRole}
              </p>
            </div>
          </div>

          <div className="flex ml-1 lg:ml-auto gap-8 mt-4 text-[20px] text-primary01">
            <a
              href={article.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href={article.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href={article.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
        <div className="contain border mt-16 mb-16"></div>

<div className="max-w-none w-[90%] md:w-[57%] mx-auto">
<div className="contain mt-8">
          <div className="prose  p-4 mt-[60px] md:mt-[80px]">
            {article.content}
          </div>
        </div>
      </div>

      <div className="w-[90%] md:w-[57%] mx-auto flex justify-between py-4 mt-8 border border-y-[#F4F2F0] border-y-[2px] border-x-0">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 ml-4">
          Share The Article:
        </h2>
        <div className="flex space-x-4 ml-4">
          <FacebookShareButton
            url={shareUrl}
            quote={article.title}
            className="hover:opacity-80 transition-opacity"
          >
            <FacebookIcon size={32} round />
            <span className="sr-only">Share on Facebook</span>
          </FacebookShareButton>

          <TwitterShareButton
            url={shareUrl}
            title={article.title}
            className="hover:opacity-80 transition-opacity"
          >
            <TwitterIcon size={32} round />
            <span className="sr-only">Share on Twitter</span>
          </TwitterShareButton>

          <LinkedinShareButton
            url={shareUrl}
            title={article.title}
            summary={article.content.substring(0, 100) + "..."}
            source={window.location.origin}
            className="hover:opacity-80 transition-opacity"
          >
            <LinkedinIcon size={32} round />
            <span className="sr-only">Share on LinkedIn</span>
          </LinkedinShareButton>

          <WhatsappShareButton
            url={shareUrl}
            title={article.title}
            className="hover:opacity-80 transition-opacity"
          >
            <WhatsappIcon size={32} round />
            <span className="sr-only">Share on WhatsApp</span>
          </WhatsappShareButton>
        </div>
      </div>
      <div className="mt-8 w-[90%] md:w-[57%] mx-auto">
      <Comments postId={id} />
      </div>
</div>
    </>
  );
};

export default BlogSingle;
