import { useParams, useNavigate } from 'react-router-dom';
import { articleData } from '../../features/services/data/articleData';
import Comments from '../../components/Comments';

const AdminBlogSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const article = articleData.Article.find(
    (article) => article.id === parseInt(id)
  );

  if (!article) {
    return <div className="contain">Article not found</div>;
  }

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="mb-6 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          ← Back to Dashboard
        </button>

        <h1 className="text-2xl font-bold mb-6">{article.title}</h1>
        
        <Comments postId={id} isAdmin={true} />
      </div>
    </div>
  );
};

export default AdminBlogSingle; 