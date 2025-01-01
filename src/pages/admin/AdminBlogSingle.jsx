import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase, { supabaseUrl } from '/services/supabase.js';

import Comments from '../../components/Comments';

const AdminBlogSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const { data, error } = await supabase
          .from('articles')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setArticle(data);
      } catch (error) {
        console.error('Error fetching article:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <div className="contain">Loading...</div>;
  }

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